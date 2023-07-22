import React from "react";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <MainNav />
      <div className="container-fluid">
        <div className="container my-5 text-secondary">
          <h2 className="my-3">About </h2>
          <hr />
          <div className="mx-auto my-5" style={{ width: "90%" }}>
            Welcome to our ecommerce website! We are dedicated to bringing you
            the best shopping experience with a wide range of products to meet
            your needs. Our mission is to provide high-quality products at
            competitive prices, delivered with exceptional customer service.
            Whether you're looking for trendy fashion apparel, stylish footwear,
            cutting-edge electronics, or home essentials, we've got you covered.
            With a user-friendly interface and secure payment options, shopping
            with us is convenient and worry-free. Our team is committed to
            ensuring your satisfaction by offering a seamless online shopping
            experience. Explore our vast selection of products, stay up to date
            with the latest trends, and enjoy the convenience of shopping from
            the comfort of your own home. Thank you for choosing our ecommerce
            website, and we look forward to serving you!
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
