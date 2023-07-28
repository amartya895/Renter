const express = require("express");

const router = express.Router();
const Traveller = require("../modals/traveller");

router.post("/addtraveller", async (req, resp) => {
  const { travellername, travelleremail } = req.body;

  try {
    const data = {
      travellername: travellername,
      travelleremail: travelleremail,
    };
    const newTraveller = new Traveller(data);
    await newTraveller.save();
    resp.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
