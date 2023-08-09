import axios from "axios";
import React, { useEffect, useState } from "react";

function EditprofileModal({ closeModal }) {
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("MALE");
  const [userMartial, setUserMartial] = useState("MARRIED");
  const [userState, setUserState] = useState("");
  const [userPincode, setUserPincode] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userDob, setUserDob] = useState("");

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userId = user._id;
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleEdit = async () => {
    const data = {
      userid: userId,
      username: userName,
      usergender: userGender,
      usermartial: userMartial,
      useraddress: userAddress,
      userdob: userDob,
      userstate: userState,
      userpincode: userPincode,
    };
    // alert(data.useraddress);
    try {
      console.log("Try sending the data");
      const res = await axios.post("/api/users/updateuser", data);
      // console.log(res)
      console.log("Data sent Successfully");
      const userDataInLocalStorage = JSON.parse(
        localStorage.getItem("currentUser")
      );
      if (userDataInLocalStorage) {
        userDataInLocalStorage.name = userName;
        userDataInLocalStorage.gender = userGender;
        userDataInLocalStorage.martial = userMartial;
        userDataInLocalStorage.address = userAddress;
        userDataInLocalStorage.dob = userDob;
        userDataInLocalStorage.state = userState;
        userDataInLocalStorage.pincode = userPincode;
        localStorage.setItem(
          "currentUser",
          JSON.stringify(userDataInLocalStorage)
        );
        window.location.reload();
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2 style={{ marginBottom: "20px" }}>Edit Profile</h2>
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
            Basic info, like your name and marital status that you use on
            Personal Profile
          </p>
        </div>
        <div className="txtField">
          <div>
            <h4 htmlFor="">Full Name</h4>
            <span className="txtIn">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </span>
          </div>
          <div>
            <h4>Gender</h4>
            <span className="txtIn">
              <select
                name=""
                id=""
                onChange={(e) => {
                  console.log(e.target.value);
                  setUserGender(e.target.value);
                }}
              >
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
            </span>
          </div>
        </div>
        <div className="txtField">
          <div>
            <h4>Marital Status</h4>
            <span className="txtIn">
              <select
                name=""
                id=""
                onChange={(e) => {
                  console.log(e.target.value);
                  setUserMartial(e.target.value);
                }}
              >
                <option value="MARRIED">MARRIED</option>
                <option value="SINGLE">SINGLE</option>
              </select>
            </span>
          </div>

          <div>
            <h4>Birthday</h4>
            <span className="txtIn">
              <input
                type="date"
                value={userDob}
                onChange={(e) => {
                  setUserDob(e.target.value);
                }}
              />
            </span>
          </div>
        </div>
        <div className="txtField">
          <div>
            <h4>Your Address</h4>
            <span className="txtIn">
              <input
                type="text"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
              />
            </span>
          </div>
          <div>
            <h4>Pincode</h4>
            <span className="txtIn">
              <input
                type="text"
                value={userPincode}
                onChange={(e) => setUserPincode(e.target.value)}
              />
            </span>
          </div>
        </div>
        <div className="txtField">
          <div>
            <h4>State</h4>
            <span className="txtIn">
              <input
                type="text"
                value={userState}
                onChange={(e) => setUserState(e.target.value)}
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
            <button className="btn-primary" onClick={handleEdit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditprofileModal;
