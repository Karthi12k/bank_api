const accountDAO = require('../dao/account-dao');
const accountService ={
    createAccount:(payload)=>{
        console.log("index inside service",payload)
        return new Promise((resolve,reject)=>{
            accountDAO.createAccount(payload).then((result)=>{
                resolve(result);
            }).catch(error=>{
                reject(error);
            })
        })
    }
}

module.exports = accountService;
