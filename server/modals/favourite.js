const mongoose = require('mongoose')

const favouriteSchema = mongoose.Schema({

    userid :{
        type : String,
        required : true
    },

    hotelid : {
        type : String,
        required : true
    }

},{
    timestamps:true
});

const favouriteModel = mongoose.model('favourites' , favouriteSchema);

module.exports = favouriteModel;