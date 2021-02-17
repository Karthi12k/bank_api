const express = require('express');
const router = express.Router();
const bankService = require('../service/bank-service');

router.post('/create', function (req, res) {// localhost:3000/bank/create
    let bodyData = req.body;
    bankService.createBank(bodyData).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send(error);
    })
  })

module.exports = router;

