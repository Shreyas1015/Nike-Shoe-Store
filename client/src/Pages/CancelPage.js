import React from "react";
import ProductNav from "../Components/ProductNav";
import Footer from "../Components/Footer";

const CancelPage = () => {
  return (
    <>
      <ProductNav />
      <div className="container-fluid bg-danger">
        <div className="container py-5 ">
          <div
            className="card mx-auto success-card-width"
            style={{ width: "30rem" }}
          >
            <div className="card-icon" style={{ height: "50vh" }}>
              <i
                className="fa-solid fa-circle-xmark fa-beat fa-2xl success-icon"
                style={{
                  color: "#e60000",
                  fontSize: "13rem",
                  margin: "11rem 8.5rem",
                }}
              ></i>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title fw-bolder mb-3">
                Transaction Cancelled
              </h5>
              <p className="card-text text-secondary mx-2 mb-3">
                Your transaction has been cancelled successfully! You can now
                try again or go back home and explore other
              </p>
              <a href="/allproducts" className="btn btn-danger">
                Back to Products Page
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CancelPage;
