import React, { useState } from "react";
import "./homeScreen.css";
import { DatePicker } from "antd";
import { FaSearch } from "react-icons/fa";
import { useScroll } from "react-use-gesture";
import { animated, useSpring } from "react-spring";
import { TiFlashOutline } from "react-icons/ti";
import { TiHome } from "react-icons/ti";
import { FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";
import img4 from "../images/img4.webp";
import img5 from "../images/img5.webp";
import img6 from "../images/img6.webp";
import img7 from "../images/img7.webp";
import img8 from "../images/img8.webp";
import img9 from "../images/img9.webp";
import img10 from "../images/img10.webp";
import img11 from "../images/img11.webp";
import img12 from "../images/img12.webp";
import spn1 from "../images/spn1.svg";
import spn2 from "../images/spn2.svg";
import spn3 from "../images/spn3.svg";
import spn4 from "../images/spn4.svg";
import spn5 from "../images/spn5.svg";

const { RangePicker } = DatePicker;

const recommendedCities = [
  {
    key: 1,
    src: img1,
    name: "Amsterdam, Netherlands",
    description:
      "You know Amsterdam's oh-so-famous central canal, rightly dubbed a UNESCO World Heritage Site in 2010. ",
    rating: 4.5,
  },
  {
    key: 2,
    src: img2,
    name: "Beijing, China",
    description:
      "Beijing gives visitors a lot to take in—the streets seem that much wider than elsewhere, the population that much denser, at first glance.",
    rating: 4.2,
  },
  {
    key: 3,
    src: img3,
    name: "Beirut, Lebanon",
    description:
      "Beirut's seaside glamour rivals that of any European riviera, with posh beach clubs and rooftop bars, palm tree-lined promenades, and hidden courtyards filled with bougainvillea.",
    rating: 4.7,
  },
  {
    key: 4,
    src: img4,
    name: "Bergen, Norway",
    description:
      "No trip to Norway is complete without a stop in Bergen, the country's second-most populated city.",
    rating: 4.0,
  },
  {
    key: 5,
    src: img5,
    name: "Bruges, Belgium",
    description:
      "With its cobblestone streets and peaceful, tree-lined canals, it's not hard to see Bruges as one big fairytale setting come to life.",
    rating: 4.8,
  },
  {
    key: 6,
    src: img6,
    name: "Budapest, Hungary",
    description:
      "With some of the best Art Nouveau architecture in Europe, Budapest has no bad angles. Case in point: The city's famous thermal baths, or the gilded, slightly ostentatious Café Gerbeaud.",
    rating: 4.3,
  },
  {
    key: 7,
    src: img7,
    name: "Buenos Aires, Argentina",
    description:
      'Buenos Aires is often called the "Paris of South America," but we think this city is in a class all its own.',
    rating: 4.9,
  },
  {
    key: 8,
    src: img8,
    name: "Cape Town, South Africa",
    description:
      "Mountains, coastlines, beaches filled with penguins: Cape Town pretty much has it all.",
    rating: 4.6,
  },
  {
    key: 9,
    src: img9,
    name: "Cartagena, Colombia",
    description:
      "This immaculately preserved 16th-century city on the Caribbean coast should be on any Colombian itinerary.",
    rating: 4.1,
  },
  {
    key: 10,
    src: img10,
    name: "Copenhagen, Denmark",
    description:
      "Despite its reputation for churning out cutting-edge restaurants and hotels, Copenhagen has an ageless charm that makes you want to keep going back.",
    rating: 4.4,
  },
  {
    key: 11,
    src: img11,
    name: "Chiang Mai, Thailand",
    description:
      "Long the cultural redoubt for Bangkok-based expats and art enthusiasts, Chiang Mai has evolved into a must-do on the Southeast Asia circuit.",
    rating: 4.7,
  },
  {
    key: 12,
    src: img12,
    name: "Chefchaouen, Morocco",
    description:
      "Tucked high in Morocco’s Rif Mountains, this 15th-century, famously blue fortress town remains a popular draw for tourists.",
    rating: 4.2,
  },
];

const sponser = [spn1, spn2, spn3, spn4, spn5];

function HomeScreen() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? event.delta[0] : 0
      }deg)`,
    });
  });

const [place , setPlace ] = useState('');

  

  const handleDate =(dates)=>{
     setFromDate(dates[0].format("DD-MM-YYYY"));
    console.log(dates[0].format("DD-MM-YYYY"));
    console.log(dates[1].format("DD-MM-YYYY"));
     setToDate(dates[1].format("DD-MM-YYYY"));
    //  console.log(fromDate);
    //  console.log(toDate);
    
  }


  return (
    <div className="mainContainer">
      <div className="main">
        <h1>Find your Perfect vacation rental</h1>
        <div className="picker">
          <div className="place">
            <h4>Destination</h4>
            <input
              type="text"
              placeholder="Where to?"
              value={place}
              onChange={(e) =>
                setPlace(e.target.value)
              }
            />
          </div>
          <div className="checkin">
            <RangePicker
              className="datepicker"
              onChange={handleDate}
              format="DD-MM-YYYY" 
            />
          </div>
          <div className="guestcount">
            <span>
              <h4>Add guests</h4>
              <h4>+1</h4>
            </span>
          </div>
          <div className="search">
            <Link to={`/allhotels/${place}/${fromDate}/${toDate}`} >
              <button className="btn-search">
                <FaSearch /> &nbsp; Search
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="recommendDestination">
        <div className="quote">
          <h1>The best rentals from the top sites, all in one place</h1>
          <p>
            We believe finding a vacation rental should be easy and not take
            hours of searching and scrolling. We’ve designed VacationRenter from
            the ground up to help travelers find the perfect rental faster and
            easier.
          </p>
        </div>
        <div className="recommendedPlace">
          <h2 style={{ marginTop: "50px" }}>Recommended destinations</h2>
          <div className="containerScroll" {...bind()}>
            {recommendedCities.map((city, key) => (
              <div
                key={city.key}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <animated.div
                  className="card"
                  style={{ ...style, backgroundImage: `url(${city.src})` }}
                />
                <h4 style={{ marginLeft: 10, marginTop: 5, marginBottom: 5 }}>
                  {city.name}
                </h4>
                <p
                  style={{
                    marginLeft: 10,
                    marginTop: 5,
                    lineHeight: 1.5,
                    height: "50%",
                    color: "rgb(133, 128, 128)",
                  }}
                >
                  {city.description}
                </p>
                <button
                  className="btn"
                  style={{
                    marginTop: 5,
                    width: "90%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  View details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="reason">
        <div className="allReason">
          <div className="res">
            <div className="icon">
              <TiFlashOutline
                style={{
                  backgroundColor: "black",
                  color: "white",
                  height: "50px",
                  width: "50px",
                  borderRadius: "25px",
                  padding: 4,
                }}
              />
            </div>
            <div className="details">
              <h3>Millions of vacation rentals</h3>
              <p
                style={{
                  color: "rgb(133, 128, 128)",
                  lineHeight: "20px",
                  marginTop: 5,
                }}
              >
                Choose from an assortment of vacation rentals from the world's
                largest travel sites
              </p>
            </div>
          </div>
          <div className="res">
            <div className="icon">
              <TiHome
                style={{
                  backgroundColor: "black",
                  color: "white",
                  height: "50px",
                  width: "50px",
                  borderRadius: "25px",
                  padding: 4,
                }}
              />
            </div>
            <div className="details">
              <h3>Premier partnerships</h3>
              <p
                style={{
                  color: "rgb(133, 128, 128)",
                  lineHeight: "20px",
                  marginTop: 5,
                }}
              >
                We partner with top booking sites like Booking.com, Vrbo,
                Outdoorsy.
              </p>
            </div>
          </div>
          <div className="res">
            <div className="icon">
              <FaAward
                style={{
                  backgroundColor: "black",
                  color: "white",
                  height: "50px",
                  padding: 4,
                  width: "50px",
                  borderRadius: "25px",
                }}
              ></FaAward>
            </div>
            <div className="details">
              <h3>Unmatched selection of vacation rental types</h3>
              <p
                style={{
                  color: "rgb(133, 128, 128)",
                  lineHeight: "20px",
                  marginTop: 5,
                }}
              >
                From more traditional rental types like cabins and condos to
                yurts, houseboats, and more
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="reason">
        <div className="recommendedPlace">
          <h2 style={{ marginTop: "50px" }}>
            Recommended destinations in India
          </h2>
          <div className="containerScroll" {...bind()}>
            {recommendedCities.map((city, index) => (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <animated.div
                  key={index}
                  className="card"
                  style={{ ...style, backgroundImage: `url(${city.src})` }}
                />
                <h4 style={{ marginLeft: 10, marginTop: 5, marginBottom: 5 }}>
                  {city.name}
                </h4>
                <p
                  style={{
                    marginLeft: 10,
                    marginTop: 5,
                    lineHeight: 1.5,
                    height: "50%",
                    color: "rgb(133, 128, 128)",
                  }}
                >
                  {city.description}
                </p>
                <button
                  className="btn"
                  style={{
                    marginTop: 5,
                    width: "90%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  View details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sponser">
        <div className="col1">
          <h4>As Featured In</h4>
        </div>
        <div className="col2">
          <div className="containerScroll">
            {sponser.map((spn, index) => (
              <div key={index} className="sponsorCard">
                <animated.div
                  className="cardSponser"
                  style={{ backgroundImage: `url(${spn})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="reason">
        <div className="recommendedPlace">
          <div
            className="inspire-head"
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2>Travel inspiration</h2>

            <button
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "16px",
                height: "auto",
                width: "auto",
                padding: "10.5px",
                fontWeight: 100,
                borderRadius: "8px",
              }}
            >
              Read our blogs
            </button>
          </div>
          <div className="containerScroll" {...bind()}>
            {recommendedCities.map((city, index) => (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <animated.div
                  key={index}
                  className="card"
                  style={{ ...style, backgroundImage: `url(${city.src})` }}
                />
                <h4 style={{ marginLeft: 10, marginTop: 5, marginBottom: 5 }}>
                  {city.name}
                </h4>
                <p
                  style={{
                    marginLeft: 10,
                    marginTop: 5,
                    lineHeight: 1.5,
                    height: "50%",
                    color: "rgb(133, 128, 128)",
                  }}
                >
                  {city.description}
                </p>
                <button
                  className="btn"
                  style={{
                    marginTop: 5,
                    width: "90%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  View details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
