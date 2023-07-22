import React, { useState } from "react";
import ProductNav from "../Components/ProductNav";
import Sidebar from "../Components/Sidebar";
import ProductCard from "../Components/Cards/ProductCard";
import Footer from "../Components/Footer";
import AccEquipAPI from "../API/AccEquipAPI";

const AccEquip = () => {
  const [sortOption, setSortOption] = useState("");
  const [genderOption, setGenderOption] = useState("");

  const createCard = (acc) => {
    return (
      <div className="col-lg-4 col-md-6" key={acc.id}>
        <ProductCard
          id={acc.id}
          image={acc.image}
          title={acc.title}
          price={acc.price}
          desc={acc.desc}
          productName={acc.productName}
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

  const sortAccs = (accs) => {
    switch (sortOption) {
      case "new":
        return accs.filter((acc) => acc.category === "new");
      case "featured":
        return accs.filter((acc) => acc.category === "featured");
      case "lowToHigh":
        return accs.sort((a, b) => a.price - b.price);
      case "highToLow":
        return accs.sort((a, b) => b.price - a.price);
      default:
        return accs;
    }
  };

  const filteredAccs = genderOption
    ? AccEquipAPI.filter((acc) => acc.gender === genderOption)
    : AccEquipAPI;

  const sortedAccs = sortAccs(filteredAccs);

  return (
    <>
      <ProductNav />
      <div className="container-fluid">
        <Sidebar pageName="Accessories & Equipment" />
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
          <div className="row">{sortedAccs.map(createCard)}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccEquip;
