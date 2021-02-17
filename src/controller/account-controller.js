const express = require('express');
const router = express.Router();
const accountService = require('../service/account-service');

router.post('/create', function (req, res) {// localhost:3000/bank/create
    let bodyData = req.body;
    console.log("index",bodyData)
    accountService.createAccount(bodyData).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send(error);
    })
  })

module.exports = router;
