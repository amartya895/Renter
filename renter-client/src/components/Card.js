import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./card.css";
import { Link } from "react-router-dom";
import whiteFavourite from "../images/favourite.png";
import redFavourite from "../images/favouriteSet.png";
import axios from "axios";

export const Card = ({
  name,
  rating,
  images,
  rentperday,
  review,
  type,
  maxcount,
  services,
  star,
  place,
  id,
  fromdate,
  todate,
}) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };
  const [makeFavourite, setMakeFavourite] = useState(false);

  const userData = JSON.parse(window.localStorage.getItem("currentUser"));

  const handleFavourite = async () => {
    setMakeFavourite(!makeFavourite);

    if (!makeFavourite) {
      console.log(userData._id);
      console.log(id);
      console.log("added in favourite");
      try {
         await axios.post("/api/favourites/makefavourite", {
          userid: userData._id,
          hotelid: id,
        });

        console.log("Data sent successfully");
      } catch (error) {}
    }
    else{
      console.log('remove from favourite');
    }
  };
  return (
    <div className="card-container">
      <div className="carousel">
        <img
          className="favrtIcon"
          src={makeFavourite ? redFavourite : whiteFavourite}
          alt=""
          srcSet=""
          onClick={handleFavourite}
        />
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />

        {images.map((item, idx) => {
          return (
            <img
              src={item}
              alt="img1"
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {images.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>

      <div style={{ display: "flex" }}>
        <p
          style={{
            width: "auto",
            padding: "0.5rem",
            backgroundColor: "red",
            borderRadius: "0.5rem",
            margin: "0.5rem 0 0 0.5rem",
            color: "white",
          }}
        >
          {rating}&#9733;
        </p>
        <p
          style={{
            width: "auto",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            margin: "0.5rem 0 0 0.5rem",
          }}
        >
          {review}
        </p>
      </div>
      <h3 style={{ margin: "0.5rem 0 0 0.5rem" }}>
        {name} <span style={{ fontSize: "14px" }}>({type})</span>
      </h3>
      <h4 style={{ margin: "0.5rem 0 0 0.5rem" }}>{place}</h4>
      <div style={{ display: "flex" }}>
        <h3 style={{ width: "auto", margin: "0.5rem 0.5rem 0 0.5rem" }}>
          {star}{" "}
        </h3>
        <h3 style={{ width: "auto", marginTop: "3px", color: "orange" }}>
          &#9733;&#9733;&#9733;&#9733;
        </h3>
      </div>

      <p style={{ margin: "0.5rem 0 0.5rem 0.5rem" }}>
        {services[0]}/{services[1]}/{services[2]}
      </p>

      <div className="card-bottom">
        <h3 className="card-price">&#8377; {rentperday}/day</h3>
        <Link to={`/booknow/${id}/${fromdate}/${todate}`} className="card-btn">
          Book Now
        </Link>
      </div>
    </div>
  );
};
