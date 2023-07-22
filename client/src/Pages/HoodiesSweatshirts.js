import React, { useState } from "react";
import ProductNav from "../Components/ProductNav";
import HoodiesSweatshirtsAPI from "../API/HoodiesSweatshirtAPI";
import ProductCard from "../Components/Cards/ProductCard";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

const HoodiesSweatshirts = () => {
  const [sortOption, setSortOption] = useState("");

  const createCard = (hoodie_sweatshirt) => {
    return (
      <div className="col-lg-4" key={hoodie_sweatshirt.id}>
        <ProductCard
          id={hoodie_sweatshirt.id}
          image={hoodie_sweatshirt.image}
          title={hoodie_sweatshirt.title}
          desc={hoodie_sweatshirt.desc}
          price={hoodie_sweatshirt.price}
          productName={hoodie_sweatshirt.productName}
        />
      </div>
    );
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
  };

  const sortHoodiesSweatshirts = (hoodiesSweatshirts) => {
    switch (sortOption) {
      case "new":
        return hoodiesSweatshirts.filter((item) => item.category === "new");
      case "featured":
        return hoodiesSweatshirts.filter(
          (item) => item.category === "featured"
        );
      case "lowToHigh":
        return hoodiesSweatshirts.sort((a, b) => a.price - b.price);
      case "highToLow":
        return hoodiesSweatshirts.sort((a, b) => b.price - a.price);
      default:
        return hoodiesSweatshirts;
    }
  };

  const sortedHoodiesSweatshirts = sortHoodiesSweatshirts(
    HoodiesSweatshirtsAPI
  );

  return (
    <>
      <ProductNav />
      <div className="container-fluid">
        {/* Sidebar */}
        <Sidebar pageName="Hoodies & Sweatshirts" />
        {/* Sort Button */}
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

        {/* Main-Content */}
        <div className="container">
          <div className="row">{sortedHoodiesSweatshirts.map(createCard)}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HoodiesSweatshirts;
