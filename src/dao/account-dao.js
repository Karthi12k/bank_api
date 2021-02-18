const accountModel = require('../model/account-model'); 

const accountDAO = {
    createAccount: (payload)=>{ // {name:'sbi', address:'bangalore'}
    console.log("index inside dao",payload)
        return new accountModel({
            type: payload.type,
            number: payload.number,
            bank: payload.bank,
            user: payload.user,
            balance:payload.balance
        }).save();
    }
}

module.exports = accountDAO;