import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./booknowScreen.css";
import { FaInternetExplorer } from "react-icons/fa";
import { FaSmokingBan, FaTemperatureHigh } from "react-icons/fa";
import { GrSatellite } from "react-icons/gr";
import { PiTelevisionLight } from "react-icons/pi";
import { AiOutlineCar } from "react-icons/ai";
import moment from "moment";
import swal from 'sweetalert2';

function BooknowScreen() {
  const { hotelid, fromdate, todate } = useParams();
  const [hotel, setHotel] = useState();
  const [fix, setFix] = useState(false);
  const fromDateObj = moment(fromdate, "DD-MM-YYYY");
  const toDateObj = moment(todate, "DD-MM-YYYY");
  const totalDays = toDateObj.diff(fromDateObj, "days");
  const [totalAmount, setTotalAmount] = useState();
  const [subtotal, setSubtotal] = useState();
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestNumber, setGuestNumber] = useState("");

  const setFixSidebar = () => {
    if (window.scrollY >= 90) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixSidebar);

  useEffect(() => {
    const fetchData = async () => {
      if (!window.localStorage.getItem("currentUser")) {
        window.location.href = "/login";
      }
      try {
        const { data } = await axios.post("/api/hotels/gethotelbyid", {
          hotelid,
        });
        setHotel(data);
        setTotalAmount(data.rentperday * totalDays);
        setSubtotal(+totalAmount + 120 + 100);
      } catch (error) {
        console.log("Something went wrong");
      }
    };

    fetchData();
  }, [hotelid,totalDays,totalAmount]);

  const handleBook = async () => {
    const bookDetail = {
      guestname: guestName,
      guestemail: guestEmail,
      guestnumber: guestNumber,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      hotel: hotel,
      fromdate: fromdate,
      todate: todate,
      subtotal: subtotal,
      totaldays: totalDays,
    };

    try {
      const bookingData = await axios.post("/api/bookings/bookhotel", bookDetail);
      swal.fire('Congrulation' , 'Your Room Booked Successfully','success').then((result)=>{
        window.location.href = '/allbookings'
      });
    } catch (error) {
      console.error(error);
      swal.fire('Opps' , 'Something Went Wrong','error');
    }
  };

  console.log(hotel);

  return (
    <div className="booknow">
      <div className="hotel-details">
        {hotel && (
          <div>
           
            <p>
              Kullu / <b>Manali</b> / Old Manali
            </p>

            <h2 style={{ marginTop: 10, color: " rgb(241, 167, 125)" }}>
              {hotel.name} , Welcomes you.
            </h2>
            <p style={{ fontSize: "30px", marginTop: 10 }}>
              Explore the Charm of Manali with us staying at our stay .
            </p>
            <div className="gallery">
              <img src={hotel.images[0]} alt="" />
              <img src={hotel.images[1]} alt="" />
              <img src={hotel.images[2]} alt="" />
            </div>
            <div className="about">
              <h1 className="heading">About this rental</h1>
              <p>
                We had 5 private rooms. All rooms are twin share based. Equipped
                with all basic needs. Well furnished. All rooms have attached
                bathrooms, flat screen LED TV's, wooden sealing, comfortable
                mattresses, carpets on floor, hot shower, free Wi-Fi etc. It is
                located in the main street of Old Manali. In reach of all local
                site seeing. In the street of Old Manali you can find out cafes,
                pubs, good restaurants, village life, handicrafts and handloom
                stores, travel agencies, bike rental etc. Manali is a amazing
                town in himalayas. There are lots adventure activities available
                in Manali.
              </p>
            </div>
            <div className="services">
              <h1 className="heading">Facilities</h1>
              <div className="price-breakdown">
                <div className="col">
                  <p>
                    <FaInternetExplorer />
                    &nbsp; {hotel.services[0]}
                  </p>
                  <p>
                    <GrSatellite /> &nbsp; Satellite or cable
                  </p>
                </div>
                <div className="col">
                  <p>
                    <PiTelevisionLight /> TV
                  </p>
                  <p>
                    <AiOutlineCar />
                    &nbsp; Parking
                  </p>
                </div>

                <div className="col">
                  <p>
                    <FaSmokingBan />
                    &nbsp; No smoking
                  </p>
                  <p>
                    <FaTemperatureHigh />
                    &nbsp; Heater
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={fix ? "payment fixed" : "payment"}>
        {hotel && (
          <>
            <span
              style={{
                display: "inline-block",
                marginRight: 5,
                fontSize: "40px",
              }}
            >
              &#8377; {hotel.rentperday}
            </span>
            <span style={{ color: "rgb(85, 83, 83)" }}>
              {totalDays} night total
            </span>
            <p style={{ marginBottom: 10 }}>4.8 rating on other travel sites</p>
            <input
              type="text"
              name="guestname"
              id=""
              placeholder="Enter guest name"
              className="guest-input"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="email"
              name="guestname"
              id=""
              placeholder="Enter guest email"
              className="guest-input"
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="phone"
              name="guestname"
              id=""
              placeholder="Enter guest phone number"
              className="guest-input"
              value={guestNumber}
              onChange={(e) => setGuestNumber(e.target.value)}
            />
            <br />
            <br />
            Male &nbsp;
            <input type="radio" name="gender" id="" value="male" />
            &nbsp; Female &nbsp;
            <input type="radio" name="gender" id="" value="female" />
            &nbsp; Other &nbsp;
            <input type="radio" name="gender" id="" value="other" />
            &nbsp;
            <br />
            <br />
            <div className="price-breakdown">
              <p>{totalDays} nights</p>
              <p> &#8377; {totalAmount}</p>
            </div>
            <div className="price-breakdown">
              <p>Cleaning Fee (including Other Tax of 5%)</p>
              <p> &#8377; 120</p>
            </div>
            <div className="price-breakdown" style={{ marginBottom: 10 }}>
              <p>Service fee (includes VAT 20%)</p>
              <p> &#8377; 100</p>
            </div>
            <hr />
            <div
              className="price-breakdown"
              style={{ marginBottom: 10, marginTop: 10 }}
            >
              <h3>Total</h3>
              {subtotal && <h3> &#8377; {subtotal}</h3>}
            </div>
            <hr />
            <br />
            <p>
              <input type="checkbox" name="t&c" id="" />
              &nbsp;&nbsp;By clicking 'Agree & continue', you are agreeing to
              our Terms and Conditions, Privacy Policy and to receive
              booking-related texts. Standard messaging rental rates may apply.
            </p>
            <br />
          </>
        )}

        <button  className="book" onClick={handleBook}>
          Book
        </button>
      </div>
    </div>
  );
}

export default BooknowScreen;
