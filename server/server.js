const express = require("express");

const usersRoute = require("../server/routes/userRoute");

const hotelsRoute = require('../server/routes/hotelRoute');

const dbconfig =  require('./db.js')

const app = express();


const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/hotels",hotelsRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
