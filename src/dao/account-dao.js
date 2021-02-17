const accountModel = require('../model/account-model'); 

const accountDAO = {
    createAccount: (payload)=>{ // {name:'sbi', address:'bangalore'}
    console.log("index inside dao",payload)
        return new accountModel({
            name: payload.name,
            number: payload.number,
            bank: payload.bank,
            user: payload.user
        }).save();
    }
}

module.exports = accountDAO;