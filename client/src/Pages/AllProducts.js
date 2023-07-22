import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccEquipAPI from "../API/AccEquipAPI";
import ProductNav from "../Components/ProductNav";
import Footer from "../Components/Footer";
import FootballAPI from "../API/FootballAPI";
import HoodiesSweatshirtAPI from "../API/HoodiesSweatshirtAPI";
import ShoesStoreCardAPI from "../API/ShoesStoreCardAPI";
import SNKRAPI from "../API/SNKRAPI";
import TrousersTigthsAPI from "../API/TrousersTightsAPI";
import Sidebar from "../Components/Sidebar";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = [
      ...AccEquipAPI,
      ...FootballAPI,
      ...HoodiesSweatshirtAPI,
      ...ShoesStoreCardAPI,
      ...SNKRAPI,
      TrousersTigthsAPI,
    ];

    setProducts(allProducts);
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
                <div className="col-lg-4 col-md-6 my-4" key={product.id}>
                  <div
                    className="card mx-auto product-card"
                    style={{ width: "22rem" }}
                  >
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

export default AllProducts;
