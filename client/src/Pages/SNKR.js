import React, { useState } from "react";
import ProductNav from "../Components/ProductNav";
import Sidebar from "../Components/Sidebar";
import ProductCard from "../Components/Cards/ProductCard";
import SNKRAPI from "../API/SNKRAPI";
import Footer from "../Components/Footer";

const SNKR = () => {
  const [sortOption, setSortOption] = useState("");

  const createCard = (shoe) => {
    return (
      <div className="col-lg-4" key={shoe.id}>
        <ProductCard
          id={shoe.id}
          image={shoe.image}
          title={shoe.title}
          desc={shoe.desc}
          price={shoe.price}
          productName={shoe.productName}
        />
      </div>
    );
  };

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
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

  const sortedShoes = sortShoes(SNKRAPI);

  return (
    <>
      <ProductNav />
      <div className="container-fluid">
        <Sidebar pageName="SNKR's" />
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
        </div>
        <div className="container">
          <div className="row">{sortedShoes.map(createCard)}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SNKR;
