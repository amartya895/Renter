const express = require("express");
const router = express.Router();

const Hotel = require("../modals/hotel");

router.post("/registerhotel", async (req, resp) => {
  const {
    name,
    type,
    star,
    review,
    rating,
    service1,
    service2,
    service3,
    img1,
    img2,
    img3,
    maxcount,
    rentperday,
  } = req.body;

  const newHotel = new Hotel({
    name: name,
    type: type,
    star: star,
    review: review,
    rating: rating,
    services: [service1, service2, service3],
    images: [img1, img2, img3],
    maxcount ,
    rentperday,
  });

  try {
    const hotel = await newHotel.save();
    resp.send('Hotel Added Successfully');
  } catch (error) {
    return resp.status(400).json({message : 'Something went wrong'});
  }
});

router.get('/getallhotels',async(req, resp)=>{

  try {

    const hotels = await Hotel.find({});

    return resp.send(hotels);
    
   } catch (error) {
        return resp.status(400).json({message:error});
   }
  

})

module.exports = router
