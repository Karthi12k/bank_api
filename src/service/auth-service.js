const userDAO = require("../dao/user-dao");
var jwt = require('jsonwebtoken');
const constant = require("../utils/constant");
const authService={
    login:(payload)=>{
        return new Promise((resolve,reject)=>{
           userDAO.ifExist(payload.phone).then((result)=>{
            
            if(!result){
                reject('user not registered with this num!please register')
            }
            console.log(payload.password,result.password);
            if(payload.password == result.password){
                let data = JSON.parse(JSON.stringify(result)); //cloning coping objects
                delete data.password;
                let token = jwt.sign(data,constant.JWT_SCRET);
                data['token']=token;
                resolve(data);

            }else{
                reject('invalid password')
            }
            
        }).catch((error)=>{
            reject(error);
        }) 


        })
    }
}
module.exports=authService;