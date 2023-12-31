import React, { useEffect, useState } from "react";
import BookingCard from "../components/BookingCard";
import axios from "axios";
import "./bookings.css";
import { RENTER_API_ENDPOINT } from "../utils/constants";

function Bookings() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userid = user._id;

  const [bookingDetails, setBookingDetails] = useState([]); // Initialize bookingDetails as an empty array

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        window.location.href = "/login";
      }
      try {
        const response = await axios.post(
          RENTER_API_ENDPOINT+"/bookings/getbooking",
          // "/api/bookings/getbooking",
          {
            userid,
          }
        );
        setBookingDetails(response.data);
        console.log("Booking fetched Successfully");
      } catch (error) {
        console.error("Error fetching bookings data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {bookingDetails.map((booking) => (
        <div className="booking" key={booking._id}>
          <BookingCard
            guestname={booking.guestname}
            guestemail={booking.guestemail}
            guestnumber={booking.guestnumber}
            Hotelname={booking.hotelname}
            Fromdate={booking.fromdate}
            Todate={booking.todate}
            status={booking.status}
            hotelid={booking.hotelid}
            bookingid={booking._id}
          />
        </div>
      ))}
    </div>
  );
}

export default Bookings;
