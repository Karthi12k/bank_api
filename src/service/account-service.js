const accountDAO = require('../dao/account-dao');
const utils = require('../utils/utilities')
const accountService ={
    createAccount:(payload)=>{
        console.log("index inside service",payload)
        payload["number"] = "ACC-" + utils.getUniqueId();
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

