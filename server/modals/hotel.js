const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    name :{
        type : String,
        required :true,
    },
    type :{
        type : String,
        required : true,
    },
    star :{
        type : Number,
        required : true
    },
    review : {
        type : String,
        required : true,
    },
    rating :{
        type :Number,
        required : true,
    },
    services:[],
    images :[],
    maxcount : {
        type : Number,
        required : true,
    },
    rentperday :{
        type : Number,
        required : true,
    },
    place : {
        type : String,
        required : true,
    },
    currentbooking:[],
},
{
    timestamps:true
});

const hotelModal = mongoose.model('hotels',hotelSchema);

module.exports = hotelModal;