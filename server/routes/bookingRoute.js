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
      totaldays: totaldays,
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

router.post("/getbooking", async (req, resp) => {
  const userId = req.body.userid;
  console.log(userId);

  try {
    const bookingtemp = await Booking.find({ userid: userId });

    console.log(bookingtemp);

    return resp.json(bookingtemp);
  } catch (error) {
    console.log("something went wrong in finding hotel by id");
  }
});

// Assuming proper imports and middleware setup for Express and Mongoose

router.post("/cancelbooking", async (req, res) => {
  const { bookingId, hotelId } = req.body;

  try {
    const updateBooking = await Booking.findOneAndUpdate(
      { _id: bookingId },
      { status: "CANCELLED" },
      { new: true }
    );

    const updateHotelBooking = await Hotel.findOne({ _id: hotelId });
    updateHotelBooking.currentbooking =
      updateHotelBooking.currentbooking.filter(
        (booking) => booking.bookingid.toString() !== bookingId
      );

    await updateHotelBooking.save();
    return res.status(200).json({ message: "Booking successfully cancelled." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
