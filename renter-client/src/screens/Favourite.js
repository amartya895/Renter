import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";

function Favourite() {
  const userData = JSON.parse(window.localStorage.getItem("currentUser"));

  const [favHotels, setFavHotels] = useState([]); // Initialize favHotels as an empty array

  useEffect(() => {
    const fetchFavouriteHotel = async () => {
      try {
        const response = await axios.post(
          "https://renter-backend.onrender.com/api/favourites/getfavouritehotel",
          {
            userid: userData._id,
          }
        );

        setFavHotels(response.data.favoriteHotels); // Update favHotels state
      } catch (error) {
        console.error("Error fetching favorite hotels:", error);
      }
    };

    fetchFavouriteHotel();
  }, [userData._id]); // Include userData._id as a dependency

  return (
    <div>
      <h2> All the favourite hotels of user here</h2>
      <div className="main-card">
        {favHotels.map((hotel, key) => (
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
          />
        ))}
      </div>
    </div>
  );
}

export default Favourite;
