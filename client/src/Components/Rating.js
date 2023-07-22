import React from "react";

const Rating = () => {
  const filledStars = 4; // Number of filled stars
  const totalStars = 5; // Total number of stars

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <i key={i} className="fa fa-star" style={{ color: "yellow" }}></i>
      );
    }
    for (let i = filledStars; i < totalStars; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return stars;
  };

  return <div>{renderStars()} ( 82 Customer Reviews )</div>;
};

export default Rating;
