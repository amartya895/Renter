const express = require("express");

const router = express.Router();
const Traveller = require("../modals/traveller");

router.post("/addtraveller", async (req, resp) => {
  const {
    userid,
    travellername,
    travelleremail,
    travellerphone,
    travellerdob,
    travellergender,
  } = req.body;

  try {
    const data = {
      userid : userid,
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

router.post('/gettraveller' , async(req , resp)=>{

    const userId = req.body.userId;

    console.log(userId);

  try {

    const travellerData = await Traveller.find({userid : userId});

    // console.log(travellerData)
    return resp.send(travellerData);
    
   } catch (error) {
        return resp.status(400).json({message:error});
   }

})

module.exports = router;
