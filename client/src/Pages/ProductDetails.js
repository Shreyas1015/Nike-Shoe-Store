import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProductNav from "../Components/ProductNav";
import Footer from "../Components/Footer";
import SNKRAPI from "../API/SNKRAPI";
import FootballAPI from "../API/FootballAPI";
import AccEquipAPI from "../API/AccEquipAPI";
import HoodiesSweatshirtAPI from "../API/HoodiesSweatshirtAPI";
import ShoesStoreCardAPI from "../API/ShoesStoreCardAPI";
import TrousersTigthsAPI from "../API/TrousersTightsAPI";
import Rating from "../Components/Rating";
import { useAuth0 } from "@auth0/auth0-react";
import Model from "../Components/PropComponent/Model";

const ProductDetails = () => {
  const { isAuthenticated } = useAuth0();
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  const { productName, id } = useParams();
  const productId = parseInt(id, 10);
  let product = null;

  switch (productName) {
    case "snkr":
      product = SNKRAPI.find(
        (item) => item.id === productId && item.productName === productName
      );
      break;
    case "footballShoes":
      product = FootballAPI.find(
        (item) => item.id === productId && item.productName === productName
      );
      break;
    case "acc":
      product = AccEquipAPI.find(
        (item) => item.id === productId && item.productName === productName
      );
      break;
    case "hoodiesSweatshirts":
      product = HoodiesSweatshirtAPI.find(
        (item) => item.id === productId && item.productName === productName
      );
      break;
    case "shoeStore":
      product = ShoesStoreCardAPI.find(
        (item) => item.id === productId && item.productName === productName
      );
      break;
    case "trouserTights":
      product = TrousersTigthsAPI.find(
        (item) => item.id === productId && item.productName === productName
      );
      break;
    default:
      break;
  }

  if (!product) {
    return <div>Product Not Found.</div>;
  }

  const minusBtn = () => {
    value > 1 ? setValue(value - 1) : setValue(1);
  };
  const plusBtn = () => {
    setValue(value + 1);
  };

  const addToCart = () => {
    const selectedProduct = {
      id: product.id,
      image: product.image,
      title: product.title,
      desc: product.desc,
      price: product.price,
      productName: product.productName,
      quantity: value,
    };

    // Check if the selected product already exists in the cart
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === selectedProduct.id
    );

    if (existingProductIndex !== -1) {
      // If the product exists, increment the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += value;
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      // If the product does not exist, add it to the cart
      cartItems.push(selectedProduct);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    navigate("/cart");
  };

  return (
    <>
      <ProductNav />
      <div className="container-fluid">
        <div className="container my-5">
          {/* Product details JSX */}
          <div className="row">
            <div className="col-lg-6 p-3">
              <img
                className="product-main-img"
                src={product.image}
                alt="Not Available"
              />
              <div className="row mt-3">
                <div className="col-lg-3 col-6">
                  <img
                    className="img-fluid extra-img"
                    src={product.image}
                    alt="Not Available"
                  />
                </div>
                <div className="col-lg-3 col-6">
                  <img
                    className="img-fluid extra-img"
                    src={product.image}
                    alt="Not Available"
                  />
                </div>
                <div className="col-lg-3 col-6">
                  <img
                    className="img-fluid extra-img"
                    src={product.image}
                    alt="Not Available"
                  />
                </div>
                <div className="col-lg-3 col-6">
                  <img
                    className="img-fluid extra-img"
                    src={product.image}
                    alt="Not Available"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 productDetails">
              <h3 className="mb-3 fw-bolder">NIKE ( Lorem )</h3>
              <div className="my-3">
                <Rating />
              </div>
              <p className="my-3 fw-semibold text-decoration-line-through">
                M.R.P : &#8377; {product.price + 4000}.00
              </p>
              <p className="my-3 fw-semibold" style={{ color: "purple" }}>
                Deal Of The Day : &#8377; {product.price}.00
              </p>
              <p className="my-3 text-secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                sapiente iusto provident, maxime quis aliquid qui eius
                dignissimos optio laudantium ad tempore dolores ducimus modi?
                Natus, optio nemo.laudantium ad tempore dolores ducimus modi?
                Natus, optio nemo.
              </p>
              <div className="my-3 d-flex justfiy-content-around">
                <div className="mx-2 text-center">
                  <i
                    className="py-4 px-2 fa-solid fa-truck fa-xl"
                    style={{ color: "#2b2b2b" }}
                  ></i>
                  <br />
                  <span>Free Delivery</span>
                </div>
                <div className="mx-2 text-center">
                  <i
                    className="py-4 px-2 fa-sharp fa-solid fa-recycle fa-xl"
                    style={{ color: "#2b2b2b" }}
                  ></i>
                  <br />
                  <span>15 Days replacement</span>
                </div>
                <div className="mx-2 text-center">
                  <i
                    className="py-4 px-2 fa-sharp fa-solid fa-shield fa-xl"
                    style={{ color: "#2b2b2b" }}
                  ></i>
                  <br />
                  <span>2 Years Warranty</span>
                </div>
                <div className="mx-2 text-center">
                  <i
                    className="fa-solid fa-money-bill fa-xl py-4 px-2"
                    style={{ color: "#2b2b2b" }}
                  ></i>
                  <br />
                  <span>Cash on delivery</span>
                </div>
              </div>
              <hr />
              <p>Available : In Stock</p>
              <p>ID : lorem123</p>
              <p>Brand : NIKE</p>
              <hr style={{ border: "2px solid black" }} />
              <div className="my-3">
                <button className=" btn btn-dark" onClick={minusBtn}>
                  -
                </button>
                <span className="p-3">{value}</span>
                <button className=" btn btn-dark" onClick={plusBtn}>
                  +
                </button>
              </div>
              <div>
                {isAuthenticated ? (
                  <button
                    className="btn btn-dark my-3 me-2"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <Model />
                )}

                <Link to={`/${productName}`} className="btn btn-dark mx-2">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
