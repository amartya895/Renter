const express = require('express');

const router = express.Router();

const Favourite = require('../modals/favourite');

const Hotel = require('../modals/hotel');

router.post('/makefavourite' , async(req , resp)=>{

    const {userid , hotelid} = req.body;

    console.log(userid , hotelid);

    try {
        
        const newFavourite = new Favourite({userid : userid , hotelid : hotelid});
        await newFavourite.save();
        console.log('data saved successfully');
        resp.send("Hotel add in favourite list");

    } catch (error) {
        console.log('Something went wrong');
    }

});

router.post('/getfavouritehotel' , async(req , resp)=>{

    const userid = req.body.userid;

   try {
    const favourites = await Favourite.find({userid : userid});
    const favHotelIdList = favourites.map((favhotel)=>{
       return favhotel.hotelid
    });

    const favHotelList = await Hotel.find({ _id: { $in: favHotelIdList } });

    // console.log({ favoriteHotels: favHotelList });

    resp.json({ favoriteHotels: favHotelList });
    
   } catch (error) {
    
   }
})



module.exports = router;
