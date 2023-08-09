import React,{useState , useEffect} from "react";
import "./navbar.css";
import { FaGlobe } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
function Navbar() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const handleLogout =()=>{
    localStorage.removeItem('currentUser');
    window.location.href ='/';
  }
  const [showModal, setShowModal] = useState(false);
  const [showModalSignup, setShowModalSignup] = useState(false);

  const closeModal = () => setShowModal(false);
  const closeModalSignup = () => setShowModalSignup(false);
  return (
    <>
      {showModal && <Login closeModal={closeModal} />}
      {showModalSignup && <Signup closeModalSignup= {closeModalSignup}/>}
      <nav className="navbar">
     
      <div className="container">
        <h3 className="logo">
          <FaHotel />
          Renter
        </h3>
        <ul className="nav-links">
          <a href="/">
            <li>
              <FaGlobe></FaGlobe>
            </li>
          </a>
          <Link to="/allhotels">
            <li>Home</li>
          </Link>
          <a href="/">
            <li>Favourites</li>
          </a>
         
         
          {
            user ? <>
             <Link to="/allbookings">
            <li>Your Booking</li>
          </Link>
            <Link to="/profile">
              
              <h3 >{user.name}</h3>
          </Link>
            <Link to="/logout">
            <button className="btn" onClick={handleLogout}>Logout</button>
          </Link>
          
            </> :<>
            <Link >
            <button className="btn" onClick={() => setShowModal(true)}>Login</button>
          </Link>
          <Link >
            <button className="btn" onClick={()=>setShowModalSignup(true)}>Signup</button>
          </Link>
          <Link to="/registerproperty">
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "16px",
                padding: "10.5px",
                fontWeight: 100,
                borderRadius: "8px",
                cursor: "pointer",
                marginLeft:20,
              }}
            >
              List your property
            </button>
          </Link>
            </>
          }
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
