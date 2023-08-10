const mongoose = require("mongoose");

const travellerSchmea = mongoose.Schema({
  userid : {
    type : String,
    required:true,
  },
  travellername: {
    type: String,
    required: true,
  },
  travelleremail : {
    type : String,
    required : true,
  },
  travellerphone : {
    type : String,
    required : true,
  },
  travellergender : {
    type : String,
    required : true,
  },
  travellerdob : {
    type : String,
    required : true,
  },
},{
    timestamps: true,
});

const travellerModel = mongoose.model("travellers", travellerSchmea);

module.exports = travellerModel;
