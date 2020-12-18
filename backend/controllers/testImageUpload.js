const express = require('express');
const testImageUploadRoutes = express.Router()
const {cloudinary} = require('../utils/cloudinary'); 
testImageUploadRoutes.post('/upload',async(req,res)=>{
    console.log("calling the upload");
    try{
    
        const fileStr=req.body.data;
  
        const uploadedResponse=await cloudinary.uploader
            .upload(fileStr,{
                upload_preset:'InstagramClone',


            })
            console.log(uploadedResponse);
            console.log("UPLOADED...!");
    }catch(error){
        console.error(error);
    }
});
module.exports=testImageUploadRoutes;