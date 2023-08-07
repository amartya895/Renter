const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender : {
        type : String,
    },
    martialstatus :{
        type : String,
    },
    address :{
        type : String,
    },
    dob : {
        type : String,
    },
    state : {
        type :String,
    },
    pincode :{
        type : String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
},{
    timestamps:true
})

const userModel = mongoose.model('users' , userSchema);

module.exports = userModel;