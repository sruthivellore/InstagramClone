const express = require('express');
const resetPasswordRoutes = express.Router()
const uuid = require('uuid');
const User =  require('../models/user')
const dotenv = require('dotenv')
dotenv.config();
const aes256 = require('aes256');
const key = process.env.AES256KEY;
var nodemailer = require('nodemailer');
var response={status:200,
              message:'',
              data:''}

var myEmail = process.env.MYEMAIL;
var myEmailPassword = process.env.MYEMAILPASSWORD;
var transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: myEmail,
    pass: myEmailPassword
}
});

var mailOptions = {
    from: myEmail,
    to: 'instagramreset.clone@gmail.com',
    subject: 'Reset Link for Instagram Password',
    text: ''
  };
  function setMailOption(to,name,otp)
  {
      mailOptions.to=to;
      mailOptions.text="Hey "+name+",\n\nSeems like you forgot your password.\n\nNo worries here is a temporary password "+otp+".\n\nRegards,\nInstaClone Team"
  }
  resetPasswordRoutes.get('/',(req, res)=>{
        
        

    let condition = {$or:[{uname:req.body.uname},{email:req.body.uname}]};
    User.findOne(condition ,(err, user) => {
        if (!user) {
            console.log(err);
            response.status=410;
            response.data={};
            response.message='Cannot Find The User';
            return res.status(410).json(response)
        } else {
            const otp = Math.floor(100000+Math.random()*987585)
            var otpenc = aes256.encrypt(key,otp.toString());
            setMailOption(user.email,user.fname,otp.toString());

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  response.status=415;
                    response.data={error:error};
                    response.message='Cannot Send Mail';
                    return res.status(415).json(response)
                } else {
                  console.log('Email sent: ' + info.response);
                  var nuser = new User(user);
                  console.log("encrypt reset");
                  console.log(nuser);
                  nuser.password = otpenc;
                  nuser.save().then(()=>{
                        response.status=200;
                        response.message='Reset Password Mail Sent.';
                        response.data={sessionKey:'1000'}
                        return res.status(200).json(response)
                  })
                  .catch((error)=>{
                    response.status=416;
                    response.data={error:error};
                    response.message='Otp not updated';
                    return res.status(416).json(response)

                  })
                  
                }
              });

            
        }
    });
});
module.exports = resetPasswordRoutes;