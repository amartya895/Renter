import React from "react";
import "./bookingCard.css";
import { IoMdCloudyNight } from "react-icons/io";
import { BsPeople } from "react-icons/bs";
import { BiHotel } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { GiHotMeal } from "react-icons/gi";
import moment from "moment";
import axios from "axios";
import swal from "sweetalert2";

function BookingCard({
  guestname,
  Hotelname,
  Fromdate,
  Todate,
  guestemail,
  guestnumber,
  status,
  hotelid,
  bookingid,
}) {
  const fromdate = moment(Fromdate, "DD-MM-YYYY").format("ddd, DD MMM YYYY");
  const todate = moment(Todate, "DD-MM-YYYY").format("ddd, DD MMM YYYY");
  const apiUrl = process.env.REACT_API_URL;

  const handleCancel = async () => {
    console.log("cancel");

    try {
      const result = await axios.post(`${apiUrl}/bookings/cancelbooking`, {
        hotelId: hotelid,
        bookingId: bookingid,
      });

      swal
        .fire("Congrats", "Your Booking Cancelled Successfully", "success")
        .then(() => {
          window.location.reload();
        });
    } catch (error) {
      console.log("error");
      swal.fire("Oops", "Something Went wrong", "error");
    }
  };

  return (
    <>
      <div className="bookingCard">
        <div style={{display: 'flex',justifyContent:'space-between'}}>
        <h1 style={{ fontSize: "30px", margin: "0 0 20px 0" }}>
          <BiHomeAlt style={{ margin: "0 10px 0 0", color: "orange" }} />
          {Hotelname}
        </h1>
        <p className="mTitle">Booking ID - {bookingid}</p>
        </div>
        <h4 style={{ fontSize: "18px", marginBottom: 5 }}>BOOKING DETAILS</h4>
        <p style={{ fontSize: "16px", color: "#747474" }}>
          Your room, meal plan and guest details
        </p>
        <div className="stayDet">
          <div style={{ fontSize: "20px" }}>
            <IoMdCloudyNight />
          </div>
          <div style={{ color: "#847777" }}>1 NIGHT(S)</div>
          <div>
            <span className="msTitle">CHECK IN</span>
            <p>
              <span>
                <span className="mTitle">{fromdate}</span>
              </span>
              <span className="msTitle"> 12:00 PM onwards</span>
            </p>
          </div>
          <div>
            <span className="msTitle">CHECK OUT</span>
            <p>
              <span>
                <span className="mTitle">{todate}</span>
              </span>
              <span className="msTitle">Till 12:00 PM</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="stayDet">
          <div style={{ fontSize: "20px" }}>
            <BsPeople />
          </div>
          <div style={{ color: "#847777" }}>2 GUEST(S)</div>
          <div>
            <span className="msTitle">TOTAL GUEST(S)</span>
            <p>
              <span>
                <span className="mTitle">2 Adults</span>
              </span>
              <span className="msTitle"> PHONE NO</span>
              <span className="mTitle">+91 {guestnumber}</span>
            </p>
          </div>
          <div>
            <span className="msTitle">PRIMARY GUEST</span>
            <p>
              <span>
                <span className="mTitle">{guestname}</span>
              </span>
              <span className="msTitle">EMAIL ID</span>
              <span className="mTitle">{guestemail}</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="stayDet">
          <div style={{ fontSize: "20px" }}>
            <BiHotel />
          </div>
          <div style={{ color: "#847777" }}>1 ROOM(S)</div>
          <div>
            <span className="mTitle">Deluxe Room</span>
            <p>
              <span>
                <span className="msTitle" style={{ fontSize: "14px" }}>
                  <BsPeople />
                  &nbsp; 2 Adults
                </span>
              </span>

              <span>
                <GiHotMeal />{" "}
                <span className="msTitle" style={{ color: "red" }}>
                  No Meal Included, Pay at hotel directly for meals
                </span>
              </span>
            </p>
          </div>
          <div>
            <span className="msTitle">STATUS </span>
            <p>
              <span>
                {status === "BOOKED" ? (
                  <span className="mTitle" style={{ color: "green" }}>
                    {status}
                  </span>
                ) : (
                  <span className="mTitle" style={{ color: "red" }}>
                    {status}
                  </span>
                )}
              </span>
              {status === "BOOKED" ? (
                <button className="cancle" onClick={handleCancel}>
                  CANCLE BOOKING
                </button>
              ) : (
                <button className="disable" disabled>
                  CANCLE BOOKING
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="priceCard">
        <h1 className="pricebrkTitle">PRICE BREAKUP</h1>
        <hr />
        <ul>
          <li>
            <div className="pricebrk">
              <span>Hotel Reservation Charges</span>
              <span>₹ 1,702</span>
            </div>
          </li>
          <li>
            <div className="pricebrk">
              <span>Taxes and Service Fee</span>
              <span>₹ 91</span>
            </div>
          </li>
          <li>
            <div className="pricebrk">
              <div>
                <span style={{color:'#1a7971'}}>Discount Coupon</span>
                <p
                  style={{
                    border: "1px dashed gray",
                    padding: "0 5px 0 5px",
                    borderRadius: 8,
                    color:'#747474'
                  }}
                >
                  WELCOMEMMT
                </p>
              </div>

              <span style={{color:'#1a7971'}}>- ₹ 93</span>
            </div>
          </li>
          <li>
            <div className="pricebrk">
              <span>
                <b>Total Price</b>
              </span>
              <span>₹ 1,700</span>
            </div>
          </li>
          <li>
            <div className="pricebrk">
              <span>
                <b>AMOUNT PAID</b>
              </span>
              <span>₹ 1,700</span>
            </div>
          </li>
        </ul>
        <p className="pricebrkTitle">Payment breakup</p>
        <div className="pricebrk">
          <span>Online </span>
          <span>₹ 1,700</span>
        </div>
        <p className="msTitle"  style={{ color: "red" , fontSize:'16px' , padding:'15px 20px' ,textAlign:'center'}}>
          Cancellation charges applicable.
        </p>
      </div>
    </>
  );
}

export default BookingCard;
