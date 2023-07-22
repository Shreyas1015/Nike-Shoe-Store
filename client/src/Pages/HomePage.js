import React from "react";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="">
        {/* Navbar  */}
        <MainNav />
        {/* Video  */}
        <div className="container-fluid">
          <video width={"100%"} autoPlay muted loop>
            <source src="/Images/Home/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text  */}
        <div className="brand-txt container-fluid text-center mt-3 mb-5">
          <span>NIKE Sicks</span>
          <h2 className="fw-bolder">EMBRACE THE SEASON</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <span>
            <Link to="/kids" className="text-decoration-none">
              <button className="btn btn-sm mx-2 btn-dark">Shop Kids</button>
            </Link>
          </span>
          <span>
            <Link to="/men" className="text-decoration-none">
              <button className="btn btn-sm mx-2 btn-dark">Shop Men</button>
            </Link>
          </span>
        </div>
        {/* 2 Div  */}
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-6 col-6">
              <img
                className="img-fluid"
                src="/Images/Home/2-divs (1).jpg"
                alt=""
              />
              <div className="shop-to-container">
                <Link to="/hoodiesSweatshirts">
                  <button className="btn btn-light  btn-outline-dark px-4">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-6">
              <img
                className="img-fluid"
                src="/Images/Home/2-divs (2).jpg"
                alt=""
              />
              <div className="shop-to-container">
                <Link to="/hoodiesSweatshirts">
                  <button className="btn btn-light  btn-outline-dark px-4">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Div 1 */}
        <div className="container-fluid">
          <h4 className="my-5">Featured</h4>
          <img
            className="div-1-img img-fluid"
            src="/Images/Home/1-div.jpg"
            alt=""
          />
          <div className="">
            <Link to="/shoeStore">
              <button className=" studs-link btn btn-light btn-outline-dark px-4">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        {/* auto Slide */}
        <div className="container-fluid">
          <h4 className="my-5">In The Spotlight</h4>
          <div className="text-center">
            <div id="carouselExample" className="carousel slide">
              <div className="container">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-4 col-4">
                        <img
                          className="img-fluid"
                          src="/Images/Home/autoSlide (1).jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-4 col-4">
                        <img
                          className="img-fluid"
                          src="/Images/Home/autoSlide (2).jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-4 col-4">
                        <img
                          className="img-fluid"
                          src="/Images/Home/autoSlide (3).jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-4 col-4">
                        <img
                          className="img-fluid"
                          src="/Images/Home/autoSlide (4).jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-4 col-4">
                        <img
                          className="img-fluid"
                          src="/Images/Home/autoSlide (5).jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-4 col-4">
                        <img
                          className="img-fluid"
                          src="/Images/Home/autoSlide (6).jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-4 col-4">
                        <img
                          className="img-fluid"
                          src="/Images/Home/autoSlide (7).jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-4 col-4">
                        <img
                          className="img-fluid"
                          src="/Images/Home/autoSlide (8).jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-4 col-4">
                        <img
                          className="img-fluid"
                          src="/Images/Home/autoSlide (9).jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                  style={{ width: "6.5vw" }}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                    style={{ backgroundColor: "black", color: "black" }}
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                  style={{ width: "6.5vw" }}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                    style={{ backgroundColor: "black", color: "black" }}
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* div 1 */}
        <div className="container-fluid">
          <h4 className="my-5">Trending</h4>
          <img
            className="div-1-img img-fluid"
            src="/Images/Home/1-div (2).jpg"
            alt=""
          />
          <div className="">
            <Link to="/footballShoes">
              <button className=" studs-link btn btn-light btn-outline-dark px-4">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        {/* div 3 */}
        <div className="container-fluid">
          <h4 className="my-5">The Essentials</h4>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="img-fluid"
                  src="/Images/Home/div-3 (1).jpg"
                  alt=""
                />
                <div className="shop-to-container">
                  <Link to="/kids">
                    <button className="btn btn-light  btn-outline-dark px-4">
                      Kids's
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="img-fluid"
                  src="/Images/Home/div-3 (2).jpg"
                  alt=""
                />
                <div className="shop-to-container">
                  <Link to="/women">
                    <button className="btn btn-light  btn-outline-dark px-4">
                      Women's
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="img-fluid"
                  src="/Images/Home/div-3 (3).jpg"
                  alt=""
                />
                <div className="shop-to-container">
                  <Link to="/men">
                    <button className="btn btn-light  btn-outline-dark px-4">
                      Men's
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* foooter */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
