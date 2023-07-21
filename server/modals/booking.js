const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({

    guestname :{
        type : String,
        required : true,
    },
    guestemail :{
        type : String,
        required : true,

    },
    guestnumber :{
        type : String,
        required : true,
    },
    userid :{
        type : String ,
        required:true
    },
    hotelname :{
        type :String,
        required : true,
    },
    hotelid :{
        type: String,
        required : true,
    },
    fromdate :{
        type : String,
        required : true
    },
    todate :{
        type : String,
        required : true
    },
    subtotal :{
        type : Number,
        required : true
    }
    ,
    transactionid :{
        type : String,
        required : true
    },
    status: {
        type: String,
        default: 'BOOKED',
      },

},{
    timestamps: true,
});

const bookingModal = mongoose.model('bookings',bookingSchema);

module.exports = bookingModal;