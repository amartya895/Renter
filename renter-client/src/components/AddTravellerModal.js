import React, { useEffect, useState } from "react";
import "./addTravellerModal.css";
import axios from "axios";
const AddTravellerModal = ({ closeModal }) => {
  const [travellerName, setTravellerName] = useState("");
  const [travellerEmail, setTravellerEmail] = useState("");
  const [travellerPhone, setTravellerPhone] = useState("");
  const [travellerGender, setTravellerGender] = useState("MALE");
  const [travellerDob, setTravellerDob] = useState("");
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleSave = async () => {
    const data = {
      travellername: travellerName,
      travelleremail: travellerEmail,
      travellerphone: travellerPhone,
      travellerdob: travellerDob,
      travellergender: travellerGender,
    };

    console.log(data);
    try {
      const res = await axios.post(
        "https://renter-backend.onrender.com/api/travellers/addtraveller",
        data
      );
      console.log("Data sent Successfully");
    } catch (error) {
      console.log(error, "something went wrong");
    }
  };

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2 style={{ marginBottom: "20px" }}>Add Traveller’s Info</h2>
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
            Basic info, like your email and number that you use on Personal
            Profile
          </p>
        </div>
        <div className="txtField">
          <div>
            <h4 htmlFor="">Full Name</h4>
            <span className="txtIn">
              <input
                type="text"
                value={travellerName}
                onChange={(e) => setTravellerName(e.target.value)}
              />
            </span>
          </div>
          <div>
            <h4>Gender</h4>
            <span className="txtIn">
              <select
                name=""
                id=""
                onChange={(e) => setTravellerGender(e.target.value)}
              >
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
            </span>
          </div>
        </div>
        <div className="txtField">
          <div>
            <h4>Email ID</h4>
            <span className="txtIn">
              <input
                type="email"
                value={travellerEmail}
                onChange={(e) => setTravellerEmail(e.target.value)}
              />
            </span>
          </div>
          <div>
            <h4>Phone No</h4>
            <span className="txtIn">
              <input
                type="text"
                value={travellerPhone}
                onChange={(e) => setTravellerPhone(e.target.value)}
              />
            </span>
          </div>
        </div>
        <div className="txtField">
          <div>
            <h4>Birthday</h4>
            <span className="txtIn">
              <input
                type="date"
                value={travellerDob}
                onChange={(e) => {
                  setTravellerDob(e.target.value);
                }}
              />
            </span>
          </div>
        </div>
        <br />
        <hr />

        <div className="travellerBtn">
          <div>
            <span
              style={{
                fontSize: "16px",
                color: "#4a4a4a",
                margin: "0px 30px 0 0",
                cursor: "pointer",
              }}
              onClick={closeModal}
            >
              CANCEL
            </span>
            <button className="btn-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTravellerModal;
