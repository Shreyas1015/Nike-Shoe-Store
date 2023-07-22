import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccEquipAPI from "../API/AccEquipAPI";
import FootballAPI from "../API/FootballAPI";
import HoodiesSweatshirtAPI from "../API/HoodiesSweatshirtAPI";
import ShoesStoreCardAPI from "../API/ShoesStoreCardAPI";
import SNKRAPI from "../API/SNKRAPI";
import TrousersTigthsAPI from "../API/TrousersTightsAPI";
import Footer from "../Components/Footer";
import ProductNav from "../Components/ProductNav";
import Sidebar from "../Components/Sidebar";

const Kids = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const kidsProducts = [
      ...AccEquipAPI.filter((product) => product.gender === "kids"),
      ...FootballAPI.filter((product) => product.gender === "kids"),
      ...HoodiesSweatshirtAPI.filter((product) => product.gender === "kids"),
      ...ShoesStoreCardAPI.filter((product) => product.gender === "kids"),
      ...SNKRAPI.filter((product) => product.gender === "kids"),
      ...TrousersTigthsAPI.filter((product) => product.gender === "kids"),
    ];
    setProducts(kidsProducts);
  }, []);

  return (
    <>
      <ProductNav />
      <div className="container-fluid">
        <Sidebar />
        <div className="container my-5">
          <div className="row">
            {products.length === 0 ? (
              <p>Loading products...</p>
            ) : (
              products.map((product) => (
                <div className="col-lg-4 my-4" key={product.id}>
                  <div className="card mx-auto product-card">
                    <img src={product.image} alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.desc}</p>
                      <Link
                        to={`/products/${product.productName}/${product.id}`}
                        className="btn btn-dark"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kids;
