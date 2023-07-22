import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <>
      <div
        className="card mx-auto my-3 product-card"
        style={{ width: "22rem" }}
      >
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <span>MRP : &#8377; {props.price}.00</span>
          <p className="card-text">{props.desc}</p>
          <Link
            to={`/products/${props.productName}/${props.id}`}
            className="btn btn-dark"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

ProductCard.defaultProps = {
  title: "Nike",
  desc: "lorem fdknd ddvd",
  price: "9999",
};
