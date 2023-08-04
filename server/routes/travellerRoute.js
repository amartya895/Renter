const express = require("express");

const router = express.Router();
const Traveller = require("../modals/traveller");

router.post("/addtraveller", async (req, resp) => {
  const {
    travellername,
    travelleremail,
    travellerphone,
    travellerdob,
    travellergender,
  } = req.body;

  try {
    const data = {
      travellername: travellername,
      travelleremail: travelleremail,
      travellerphone: travellerphone,
      travellerdob: travellerdob,
      travellergender: travellergender,
    };
    const newTraveller = new Traveller(data);
    await newTraveller.save();
    resp.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ error: "Something went wrong" });
  }
});

router.get('/gettraveller' , async(req , resp)=>{

  try {

    const travellerData = await Traveller.find({});

    return resp.send(travellerData);
    
   } catch (error) {
        return resp.status(400).json({message:error});
   }

})

module.exports = router;
