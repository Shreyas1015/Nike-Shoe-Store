import React, { useState } from "react";
import ProductNav from "../Components/ProductNav";
import Sidebar from "../Components/Sidebar";
import ProductCard from "../Components/Cards/ProductCard";
import FootballAPI from "../API/FootballAPI";
import Footer from "../Components/Footer";

const Football = () => {
  const [sortOption, setSortOption] = useState("");
  const [genderOption, setGenderOption] = useState("");

  const createCard = (shoe) => {
    return (
      <div className="col-lg-4 col-md-6" key={shoe.id}>
        <ProductCard
          id={shoe.id}
          image={shoe.image}
          title={shoe.title}
          price={shoe.price}
          desc={shoe.desc}
          productName={shoe.productName}
        />
      </div>
    );
  };

  const handleSortChange = (e) => {
    const selectOption = e.target.value;
    setSortOption(selectOption);
  };

  const handleGenderChange = (e) => {
    const selectOption = e.target.value;
    setGenderOption(selectOption);
  };

  const sortShoes = (shoes) => {
    switch (sortOption) {
      case "new":
        return shoes.filter((shoe) => shoe.category === "new");
      case "featured":
        return shoes.filter((shoe) => shoe.category === "featured");
      case "lowToHigh":
        return shoes.sort((a, b) => a.price - b.price);
      case "highToLow":
        return shoes.sort((a, b) => b.price - a.price);
      default:
        return shoes;
    }
  };

  const filteredShoes = genderOption
    ? FootballAPI.filter((shoe) => shoe.gender === genderOption)
    : FootballAPI;

  const sortedShoes = sortShoes(filteredShoes);

  return (
    <>
      <ProductNav />
      <div className="container-fluid">
        <Sidebar pageName="Football Shoes" />
        <div className="container d-flex justify-content-end my-4">
          <div className="d-flex justify-content-end">
            <label htmlFor="sortSelect" className="m-2">
              Sort By:
            </label>
            <select
              id="sortSelect"
              className="form-select"
              style={{ width: "20vw" }}
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="">All</option>
              <option value="new">New</option>
              <option value="featured">Featured</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
          <div className="d-flex justify-content-end">
            <label htmlFor="genderSelect" className="m-2">
              Gender:
            </label>
            <select
              id="genderSelect"
              className="form-select"
              style={{ width: "20vw" }}
              value={genderOption}
              onChange={handleGenderChange}
            >
              <option value="">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="row">{sortedShoes.map(createCard)}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Football;
