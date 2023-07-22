import React from "react";
import ProductNav from "../Components/ProductNav";
import Footer from "../Components/Footer";

const SuccessPage = () => {
  return (
    <>
      <ProductNav />
      <div className="container-fluid bg-success">
        <div className="container py-5 ">
          <div
            className="card mx-auto success-card-width"
            style={{ width: "30rem" }}
          >
            <div className="card-icon" style={{ height: "50vh" }}>
              <i
                className="fa-solid fa-circle-check fa-beat fa-2xl success-icon"
                style={{
                  color: "#0fe628",
                  fontSize: "13rem",
                  margin: "11rem 8.5rem",
                }}
              ></i>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title fw-bolder mb-3">Payment Successfull</h5>
              <p className="card-text text-secondary mx-2 mb-3">
                Your payment has been successfully processed. Thank you for your
                purchase!
              </p>
              <a href="/" className="btn btn-success">
                Back to Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuccessPage;
