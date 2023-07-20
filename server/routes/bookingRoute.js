const express = require("express");

const router = express.Router();

const Booking = require("../modals/booking");
const Hotel = require("../modals/hotel");

router.post("/bookhotel", async (req, resp) => {
  const {
    guestname,
    guestemail,
    guestnumber,
    userid,
    hotel,
    fromdate,
    todate,
    subtotal,
    totaldays,
  } = req.body;

  try {
    const newBooking = new Booking({
      guestname: guestname,
      guestemail: guestemail,
      guestnumber: guestnumber,
      userid: userid,
      hotelname: hotel.name,
      hotelid: hotel._id,
      fromdate: fromdate,
      todate: todate,
      subtotal: subtotal,
      transactionid: "xcd8479345943350843",
    });

    const booking = await newBooking.save();
    console.log(booking);

    const hotelTemp = await Hotel.findOne({ _id: hotel._id });
    hotelTemp.currentbooking.push({
      bookingid: booking._id,
      fromdate: fromdate,
      todate: todate,
      userid: userid,
      status: booking.status,
    });

    await hotelTemp.save();

    resp.send("Your Payment successfull, Booked Successfully");
  } catch (error) {
    return resp.status(400).json({ error });
  }
});

router.post('/getbooking', async (req, resp) => {
  const userId = req.body.userid;
  console.log(userId);

  try {
    const bookingtemp = await Booking.find({userid : userId});
    
    console.log(bookingtemp);

    return  resp.json(bookingtemp);;
  } catch (error) {
    console.log("something went wrong in finding hotel by id");
  }
});

module.exports = router;
