const userModel = require('../model/user-model'); 
const userDAO = {
    createuser: (payload)=>{ // {name:'sbi', address:'bangalore'}
        return new userModel({
            name: payload.name,
            password: payload.password,
            address: payload.address,
            email: payload.email,
            phone: payload.phone
        }).save();
    }
}
module.exports = userDAO;