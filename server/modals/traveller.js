const mongoose = require("mongoose");

const travellerSchmea = mongoose.Schema({
  travellername: {
    type: String,
    required: true,
  },
  travelleremail : {
    type : String,
    required : true,
  },
},{
    timestamps: true,
});

const travellerModel = mongoose.model("travellers", travellerSchmea);

module.exports = travellerModel;
