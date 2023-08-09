import React, { useEffect, useState } from "react";
import "./hotel.css";
import { Card } from "../components/Card";
import axios from "axios";
import { useParams } from "react-router-dom";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { place, fromdate, todate } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Trying to fetch data");
        const data = (
          await axios.get(
            "https://your-backend-render-app.onrender.com/api/hotels/getallhotels"
          )
        ).data;
        console.log("Data fetched successfully");
        console.log(data);
        setHotels(data);
      } catch (error) {
        console.log("Something went wrong");
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredHotels = place
    ? hotels.filter(
        (hotel) => hotel.place.toLowerCase() === place.toLowerCase()
      )
    : hotels;

  const searchedHotels = filteredHotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <hr />
      <div className="searchHotel">
        <h2>
          {searchedHotels.length}+ stays in {place || "anywhere"} on date from{" "}
          {fromdate || "any"} to {todate || "any"}
        </h2>
        <input
          className="SearchBar"
          type="text"
          placeholder="Search Hotel Name"
          onChange={handleSearch}
        />
      </div>

      <div className="main-card">
        {searchedHotels.map((hotel, key) => (
          <Card
            key={key}
            name={hotel.name}
            rating={hotel.rating}
            images={hotel.images}
            rentperday={hotel.rentperday}
            type={hotel.type}
            maxcount={hotel.maxcount}
            services={hotel.services}
            star={hotel.star}
            review={hotel.review}
            place={hotel.place}
            id={hotel._id}
            fromdate={fromdate}
            todate={todate}
          />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
