import React from "react";
import FooterLI from "./PropComponent/FooterLI";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <>
      <div className="container-fluid bg-dark text-white pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5 className="px-3 mt-5">GET HELP</h5>
              <ul className="footer-ul list-group">
                <FooterLI li="Order Status" />
                <FooterLI li="Delivery" />
                <FooterLI li="Returns" />
                <FooterLI li="Payment Options" />
                <FooterLI li="Contact Us on 'product.com'" />
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="px-3 mt-5">ABOUT NIKE</h5>
              <ul className="footer-ul list-group">
                <FooterLI li="News" />
                <FooterLI li="Careers" />
                <FooterLI li="Investors" />
                <FooterLI li="Sustainability" />
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="social-icons mt-5">
                <span className="m-3">
                  <i
                    className="fa-brands fa-square-twitter fa-2xl fa-beat"
                    style={{ color: "#737373" }}
                  ></i>
                </span>
                <span className="m-3">
                  <i
                    className="fa-brands fa-facebook fa-beat fa-2xl"
                    style={{ color: "#737373" }}
                  ></i>
                </span>
                <span className="m-3">
                  <i
                    className="fa-brands fa-youtube fa-beat fa-2xl"
                    style={{ color: "#737373" }}
                  ></i>
                </span>
                <span className="m-3">
                  <i
                    className="fa-brands fa-square-instagram fa-beat fa-2xl"
                    style={{ color: "#737373" }}
                  ></i>
                </span>
              </div>
            </div>
          </div>
          <div className="bottom-nav d-flex flex-wrap justify-content-between mt-3 mx-3 py-3 bg-dark">
            <div className="col-lg-6 col-12">
              <i
                className="fa-solid fa-location-dot fa-md"
                style={{ color: "#f7f7f7" }}
              ></i>
              <span className="mx-2">India</span>
              <span className="mx-2 text-secondary">
                @{currYear} NIKE ,All Rights Reserved
              </span>
            </div>
            <div className="col-lg-6 col-12 text-center">
              <span className="mx-3 text-secondary">Guides</span>
              <span className="mx-3 text-secondary">Terms of Sales</span>
              <span className="mx-3 text-secondary">Terms of Use</span>
              <span className="mx-3 text-secondary">NIKE Privacy & Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
