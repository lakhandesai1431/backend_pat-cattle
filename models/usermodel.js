const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    mobilenumber:{
        type:Number,
        require:true,
        unique:true
    },
    name: {
        type:String
    },

    lastname: {
        type:String,
    },
    profilepic:{
        type:String
    },
    location:{
        type:String
    },
    response:[{
        type:mongoose.Types.ObjectId
    }],
    favorite:[{
        type:mongoose.Types.ObjectId
    }],
    uid:{
        unique:true,
        type:String
    }

},{timestamps:true});
const User = mongoose.model('Usermodel', userSchema);    

module.exports = User