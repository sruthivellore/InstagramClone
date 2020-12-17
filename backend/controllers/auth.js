const express = require('express');
const authRoutes = express.Router()
const uuid = require('uuid');
const User =  require('../models/user')
const dotenv = require('dotenv')
dotenv.config();
const key = process.env.AES256KEY;
const aes256 = require('aes256');


var response={status:200,
              message:'',
              data:''}

function saveSessionKey(user,sessionKey){
    var updateUser = new User(user);
    updateUser.sessionKey= sessionKey;
    console.log("session key");
    console.log(updateUser);
    updateUser.save()
        .then(()=>{
            return {resp:true}
        })
        .catch((error)=>{
            response.status=417;
            response.data={};
            response.message='Error in saving session key';
        });

}

authRoutes.get('/',(req, res)=>{
    let condition = {uname:req.body.uname};
    User.findOne(condition ,(err, user) => {
        if (!user) {
            console.log(err);
            response.status=410;
            response.data={};
            response.message='Cannot Find The User';
            return res.status(410).json(response)
        } else {
            console.log(user);
            var decryptPassword =aes256.decrypt(key, user.password);
            if(decryptPassword === req.body.password){
                response.status=200;
                response.message='Logged in Successfully';
                response.data={sessionKey:uuid.v4()}
                saveSessionKey(user,response.data.sessionKey);
                return res.status(200).json(response)
            }else{
                response.status=411;
                response.data={};
                response.message='Incorrect Password';
                return res.status(411).json(response)
            }
        }
    });
});
authRoutes.post('/',(req, res)=>{
    
        let condition = {$or:[{uname:req.body.uname}, {email: req.body.email}]};
        User.find(condition ,(err, user) => {
            if (user.length === 0) {
                // req.body.password = aes256.encrypt(key,req.body.password)
                let nuser = new User(req.body);
                console.log(req.body);
                nuser.password = aes256.encrypt(key,nuser.password)
                nuser.sessionKey=uuid.v4();
                nuser.save()
                    .then(user => {
                        response.status=200;
                        response.data={sessionKey:user.sessionKey};
                        response.message='User Added & Logged in Successfully';
                        return res.status(200).json(response)
                      })
                    .catch(err => {
                        response.status=412;
                        response.message="Adding New User Failed";
                        response.data={}
                        return res.status(412).json(response);
                    });

            } else {

                    response.status=413;
                    response.data={};
                    response.message='UserName/Email Taken';
                    return res.status(413).json(response)
            }
    });

});
module.exports = authRoutes;