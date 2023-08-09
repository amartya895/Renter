const express = require("express");

const usersRoute = require("../server/routes/userRoute");

const hotelsRoute = require('../server/routes/hotelRoute');

const bookingRoute = require('../server/routes/bookingRoute');
const travellerRoute = require('../server/routes/travellerRoute')

const dbconfig =  require('./db.js')

const app = express();


const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/travellers" , travellerRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/bookings",bookingRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
