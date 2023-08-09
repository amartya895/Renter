import React, { useEffect, useState } from "react";
import "./profileScreen.css";
import { GoPerson } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { MdOutlineGroup } from "react-icons/md";
import AddTravellerModal from "../components/AddTravellerModal";
import axios from "axios";
import EditprofileModal from "../components/EditprofileModal";

function ProfileScreen() {
  const userData = JSON.parse(window.localStorage.getItem("currentUser"));
  const [travellers, setTravellers] = useState([]);
  if (!userData) {
    window.location.href = "/login";
  }

  useEffect(() => {
    const fetchData = async () => {
      const travellerData = (await axios.get("/api/travellers/gettraveller"))
        .data;
      setTravellers(travellerData);
    };

    fetchData();
  }, [userData]);

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const closeModal = () =>  setShowModal(false);
   
  const closeModalEdit =()=> setShowModalEdit(false);

  return (
    <>
      {showModal && <AddTravellerModal closeModal={closeModal} />}
      {showModalEdit && <EditprofileModal closeModal={closeModalEdit} />}

      <hr />
      <h3
        style={{
          fontSize: "30px",
          marginLeft: "110px",
          marginTop: "30px",
          color: "#4a4a4a",
        }}
      >
        My Profile
      </h3>
      <div className="main-profile-sec">
        <div className="left-sec">
          <div className="userDet">
            <div className="pp"></div>
            <h3>{userData.name}</h3>
            <span style={{ fontSize: 12, color: "#4a4a4a" }}>
              PERSONAL PROFILE
            </span>
          </div>
          <ul>
            <li className="ppbox">
              <span>
                <GoPerson />
              </span>
              <span>Profile</span>
            </li>
            <li className="ppbox">
              <span>
                <CiLogin />
              </span>
              <span>Login Details</span>
            </li>
            <li className="ppbox">
              <span>
                <MdOutlineGroup />
              </span>
              <span>Save Travellers</span>
            </li>
            <li className="ppbox">
              <span>
                <CiLogout />
              </span>
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="right-profile-sec">
          <div className="profile-sec">
            <div className="detailCardHandler">
              <div className="profile-head">
                <h3 style={{ fontSize: "30px" }}>Profile</h3>
                <p style={{ fontSize: "18px", color: "#4a4a4a" }}>
                  Basic info, for a faster booking experience
                </p>
              </div>
              <div className="profile-right">
                <button className="edit-btn">
                  <span onClick={() => setShowModalEdit(true)}>&#9998; Edit</span>
                </button>
              </div>
            </div>
            <ul>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">Name</span>
                  <span className="profile-val">{userData.name}</span>
                </div>
              </li>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">BIRTHDAY</span>
                  <span className="profile-val">{userData.dob === "" ? <span style={{fontSize:'14px' , color:'#008cff'}}>+ Add</span> :userData.dob}</span>
                </div>
              </li>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">GENDER</span>
                  <span className="profile-val">{userData.gender === "" ? <span style={{fontSize:'14px' , color:'#008cff'}}>+ Add</span> :userData.gender}</span>
                </div>
              </li>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">MARITAL STATUS</span>
                  <span className="profile-val">{userData.martial === "" ? <span style={{fontSize:'14px' , color:'#008cff'}}>+ Add</span> :userData.martial}</span>
                </div>
              </li>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">YOUR ADDRESS</span>
                  <span className="profile-val">
                  {userData.address === "" ? <span style={{fontSize:'14px' , color:'#008cff'}}>+ Add</span> :userData.address}
                  </span>
                </div>
              </li>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">PINCODE</span>
                  <span className="profile-val">{userData.pincode === "" ? <span style={{fontSize:'14px' , color:'#008cff'}}>+ Add</span> :userData.pincode}</span>
                </div>
              </li>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">STATE</span>
                  <span className="profile-val">{userData.state === "" ? <span style={{fontSize:'14px' , color:'#008cff'}}>+ Add</span> :userData.state}</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="profile-sec">
            <div className="detailCardHandler">
              <div className="profile-head">
                <h3 style={{ fontSize: "30px" }}>Login Details</h3>
                <p style={{ fontSize: "18px", color: "#4a4a4a" }}>
                  Manage your email address mobile number and password
                </p>
              </div>
            </div>
            <ul>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">MOBILE NUMBER</span>
                  <span className="profile-val">+91 - 9821020837</span>
                  <span className="verify">&#10003; Verified</span>
                </div>
              </li>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">EMAIL ID</span>
                  <span className="profile-val">{userData.email}</span>
                  <span className="verify">&#10003; Verified</span>
                </div>
              </li>
              <li>
                <div className="profile-det-li">
                  <span className="profile-key">PASSWORD</span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "80%",
                    }}
                  >
                    <span className="profile-val">#######</span>
                    <span style={{ marginRight: "30px", color: "#008cff" }}>
                      Change password?
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="profile-sec">
            <div className="detailCardHandler">
              <div className="profile-head">
                <h3 style={{ fontSize: "30px" }}>Save Traveller(s)</h3>
                <p style={{ fontSize: "18px", color: "#4a4a4a" }}>
                  You have {travellers.length} Traveller(s)
                </p>
              </div>
              <div className="profile-right">
                <button className="edit-btn">
                  <span onClick={() => setShowModal(true)}>
                    &#9998; Add Traveller
                  </span>
                </button>
              </div>
            </div>
            <ul>
              {travellers.map((traveller, key) => (
                <li key={traveller._id}>
                  <div className="profile-det-li">
                    <div className="person-icon">
                      <GoPerson />
                    </div>
                    <p className="traveller-det">
                      <span>
                        {traveller.travellername}{" "}
                        <span>( {traveller.travellergender} )</span>
                      </span>

                      <span style={{ marginRight: "30px", color: "#008cff" }}>
                        View Details
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
