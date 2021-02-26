var express = require('express')
var router = express.Router()
const authService=require('../service/auth-service')



router.post('/login',(req,res)=>{
    let bodyData=req.body;
  authService.login(bodyData).then((result)=>{
      res.status(200).send(result)
  }).catch((error)=>{
    res.status(500).send(error);
  })  
})

module.exports=router;