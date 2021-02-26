const userDAO = require("../dao/user-dao");

const userService={
    createuser:(payload)=>{
        return new Promise((resolve,reject)=>{
            userDAO.createuser(payload).then((result)=>{
                
            }).catch((error)=>{
                reject(error);
            })

        })
    }
}
module.exports=userService;