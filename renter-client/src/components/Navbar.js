import React, { useState } from "react";
import "./navbar.css";
import logo from "../images/renterLogo.png";
import menu from "../images/menus.png";
import { Link } from "react-router-dom";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };
  const [menuItem, setMenuItem] = useState(false);

  const handleMenu = ()=>{
   
    setMenuItem(!menuItem);
    if(menuItem)
    {
      console.log('show');
    }
    else{
      console.log('hide');
    }
  }
    
  
  const [showModal, setShowModal] = useState(false);
  const [showModalSignup, setShowModalSignup] = useState(false);

  const closeModal = () => setShowModal(false);
  const closeModalSignup = () => setShowModalSignup(false);
  return (
    <>
      {showModal && <Login closeModal={closeModal} />}
      {showModalSignup && <Signup closeModalSignup={closeModalSignup} />}

      <nav>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
            <p>Renter</p>
          </div>

          <div className="nav-menu-bg">
            <ul className="nav-menu">
              <li>
                <Link to="/allhotels">Home</Link>
              </li>
              <li>
                <Link to="/favourite">Favourite</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/allbookings">Your Booking</Link>
                  </li>
                  <li>
                    <Link to="/profile">{user.name}</Link>
                  </li>
                  <div class="nav-btn">
                    <Link to="/logout">
                      <button classNameName="btn" onClick={handleLogout}>
                        Logout
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div class="nav-btn">
                    <Link>
                      <button onClick={() => setShowModal(true)}>Login</button>
                    </Link>
                    <Link>
                      <button onClick={() => setShowModalSignup(true)}>
                        Signup
                      </button>
                    </Link>
                    <Link to="/registerproperty">
                      <button>List your property</button>
                    </Link>
                  </div>
                </>
              )}
            </ul>

            <div className="menu-bar" onClick={handleMenu}>
              <img
                id="menu-bar-btn"
                src={menu}
                alt=""
                srcset=""
                
              />
            </div>
          </div>
        </div>
        {
          menuItem ? <ul className="nav-menu-ss" id="ss-nav-menu">
          <li>
                  <Link to="/allhotels">Home</Link>
                </li>
                <li>
                  <Link to="/favourite">Favourite</Link>
                </li>
                {user ? (
                  <>
                    <li>
                      <Link to="/allbookings">Your Booking</Link>
                    </li>
                    <li>
                      <Link to="/profile">{user.name}</Link>
                    </li>
                   <li>
                      <Link to="/logout" onClick={handleLogout}>
                       
                          Logout
                       
                      </Link>
                      </li>
                  </>
                ) : (
                  <>
                   <li onClick={() => setShowModal(true)}>
                      <Link >
                        Login
                      </Link>
                      </li>
                      <li onClick={() => setShowModalSignup(true)}>
                      <Link>
                        
                          Signup
                        
                      </Link>
                      </li>
                      <li to="/registerproperty">
                      <Link to="/registerproperty">
                        List your property
                      </Link>
                      </li>
                    
                  </>
                )}
          </ul>:<></>
        }
      </nav>
    </>
  );
}

export default Navbar;


