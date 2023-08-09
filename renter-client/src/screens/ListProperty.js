import React, { useState } from "react";
import axios from "axios";
import "./listProperty.css";
import swal from 'sweetalert2';
function ListProperty() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [star, setStar] = useState("");
  const [review, setReview] = useState("");
  const [place, setPlace] = useState("");
  const [rating, setRating] = useState("");
  const [maxcount, setMaxcount] = useState("");
  const [rentperday, setRentperday] = useState("");
  const [service1, setService1] = useState("");
  const [service2, setService2] = useState("");
  const [service3, setService3] = useState("");

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  const handleRegister = async () => {
    const hotelData = {
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
      place,
    };
    try {
      console.log("data sending started");
      await (
        await axios.post("/api/hotels/registerhotel", hotelData)
      ).data;
      swal.fire('Congrulation' , 'Your Hotel Registered Successfully','success').then((result)=>{
        window.location.href = '/allhotels'
      });
      console.log("data sent successfully");
      console.log(hotelData);
    } catch (error) {
      console.log({message : error});
      swal.fire('Opps' , 'Something Went Wrong','error');
    }
  };
  return (
    <>
      <div className="main-list-container">
        <div className="list-left">
          <div className="left-center">
            <h1>List your property at Renter</h1>
            <p style={{ marginTop: "10px", marginBottom: "15px" }}>
              #1 booking hotel booking service
            </p>
            <h2 style={{ lineHeight: "30px", color: "#4a4a4a" }}>
              "Hospitality is not to change people, but to offer them space
              where change can take place."
            </h2>
          </div>
        </div>
        <div className="list-right">
          <h2 style={{ marginBottom: "20px" }}>Add Hotel's Info</h2>
          <hr />

          <div>
            <h4
              style={{
                fontWeight: 900,
                lineHeight: "18px",
                marginTop: "18px",
                fontSize: "20px",
                color: "#000",
              }}
            >
              Basic Information
            </h4>
            <p style={{ marginTop: "2px", fontSize: "14px" }}>
              Basic info, like hotel name and location that will be used to
              locate on Map.
            </p>
          </div>
          <form action="" name="propertyForm" method="post">
            <div className="prop-item">
              <div className="inputField">
                <h4>Hotel Name</h4>
                <span className="txtIn">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Hotel Name"
                  />
                </span>
              </div>
              <div className="inputField">
                <h4>Type of Hotel</h4>
                <span className="txtIn">
                  <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="villa , apartment etc.."
                  />
                </span>
              </div>
            </div>
            <div className="prop-item">
              <div className="inputField">
                <h4>Stars</h4>
                <span className="txtIn">
                  <input
                    type="number"
                    value={star}
                    onChange={(e) => setStar(e.target.value)}
                    placeholder="3* . 4* etc..."
                  />
                </span>
              </div>
              <div className="inputField">
                <h4>Reviews</h4>
                <span className="txtIn">
                  <input
                    type="text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Excellent ,good or average.."
                  />
                </span>
              </div>
            </div>
            <div className="prop-item">
              <div className="inputField">
                <h4>Location</h4>
                <span className="txtIn">
                  <input
                    type="text"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    placeholder="Bihar , UP ..."
                  />
                </span>
              </div>
              <div className="inputField">
                <h4>Rating</h4>
                <span className="txtIn">
                  <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    placeholder="3.5/5 , 4.5/5 etc.."
                  />
                </span>
              </div>
            </div>
            <div className="prop-item">
              <div className="inputField">
                <h4>Max Guest Count</h4>
                <span className="txtIn">
                  <input
                    type="number"
                    value={maxcount}
                    onChange={(e) => setMaxcount(e.target.value)}
                    placeholder="Maxcount"
                  />
                </span>
              </div>
              <div className="inputField">
                <h4>Rent per day</h4>
                <span className="txtIn">
                  <input
                    type="number"
                    value={rentperday}
                    onChange={(e) => setRentperday(e.target.value)}
                    placeholder="Rent per day"
                  />
                </span>
              </div>
            </div>

            <div>
              <h4 style={{ marginTop: "20px", marginBottom: "-15px" }}>
                Services
              </h4>
              <div className="prop-item">
                <div className="inputField">
                  <span className="txtIn">
                    <input
                      type="text"
                      value={service1}
                      onChange={(e) => setService1(e.target.value)}
                      placeholder="Internet"
                    />
                  </span>
                </div>
                <div className="inputField">
                  <span className="txtIn">
                    <input
                      type="text"
                      value={service2}
                      onChange={(e) => setService2(e.target.value)}
                      placeholder="Gyser"
                    />
                  </span>
                </div>
                <div className="inputField">
                  <span className="txtIn">
                    <input
                      type="text"
                      value={service3}
                      onChange={(e) => setService3(e.target.value)}
                      placeholder="Parking"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 style={{ marginTop: "20px", marginBottom: "-15px" }}>
                Images
              </h4>
              <div className="prop-item">
                <div className="inputField">
                  <span className="txtIn">
                    <input
                      type="text"
                      value={img1}
                      onChange={(e) => setImg1(e.target.value)}
                      placeholder="Image 1"
                    />
                  </span>
                </div>
                <div className="inputField">
                  <span className="txtIn">
                    <input
                      type="text"
                      value={img2}
                      onChange={(e) => setImg2(e.target.value)}
                      placeholder="Image 2"
                    />
                  </span>
                </div>
                <div className="inputField">
                  <span className="txtIn">
                    <input
                      type="text"
                      value={img3}
                      onChange={(e) => setImg3(e.target.value)}
                      placeholder="Image 3"
                    />
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div
            className="travellerBtn"
            style={{ marginRight: "20px", marginTop: "10px" }}
          >
            <div>
              <span
                style={{
                  fontSize: "16px",
                  color: "#4a4a4a",
                  margin: "0px 30px 0 0",
                  cursor: "pointer",
                }}
              >
                CANCEL
              </span>
              <button
                className="btn-primary"
                style={{ backgroundColor: "#5e70cd" }}
                onClick={handleRegister}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProperty;
