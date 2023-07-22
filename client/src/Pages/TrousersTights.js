import React, { useState } from "react";
import ProductNav from "../Components/ProductNav";
import Sidebar from "../Components/Sidebar";
import ProductCard from "../Components/Cards/ProductCard";
import Footer from "../Components/Footer";
import TrousersTigthsAPI from "../API/TrousersTightsAPI";

const TrouserTigths = () => {
  const [sortOption, setSortOption] = useState("");

  const createCard = (cloth) => {
    return (
      <div className="col-lg-4" key={cloth.id}>
        <ProductCard
          id={cloth.id}
          image={cloth.image}
          title={cloth.title}
          price={cloth.price}
          desc={cloth.desc}
          productName={cloth.productName}
        />
      </div>
    );
  };

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
  };

  const sortCloths = (cloths) => {
    switch (sortOption) {
      case "new":
        return cloths.filter((cloth) => cloth.category === "new");
      case "featured":
        return cloths.filter((cloth) => cloth.category === "featured");
      case "lowToHigh":
        return cloths.sort((a, b) => a.price - b.price);
      case "highToLow":
        return cloths.sort((a, b) => b.price - a.price);
      default:
        return cloths;
    }
  };

  const sortedCloths = sortCloths(TrousersTigthsAPI);

  return (
    <>
      <ProductNav />
      <div className="container-fluid">
        <Sidebar pageName="Trouser & Tights" />
        <div className="container d-flex justify-content-end  my-4">
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
          <div className="row">{sortedCloths.map(createCard)}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrouserTigths;
