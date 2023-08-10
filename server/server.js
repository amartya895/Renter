const express = require("express");
const cors = require("cors");

const usersRoute = require("../server/routes/userRoute");

const hotelsRoute = require("../server/routes/hotelRoute");

const bookingRoute = require("../server/routes/bookingRoute");
const travellerRoute = require("../server/routes/travellerRoute");

const dbconfig = require("./db.js");

const app = express();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://renter-khaki.vercel.app", //this is for deployed version
    // origin: "http://localhost:3000", // this is for local development
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api/travellers", travellerRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/bookings", bookingRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
