import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import Model from "./PropComponent/Model";

const ProductNav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar  navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand mx-3" href="/">
              <img
                className="brand-img"
                src="/Images/Home/brand-img.png"
                alt="Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              data-bs-scroll="true"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  NIKE
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1">
                  <li className="nav-item px-3 fw-semibold text-black">
                    <Link to="/" className="nav-link text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item px-3 fw-semibold text-black">
                    <Link to="/about" className="nav-link text-decoration-none">
                      About
                    </Link>
                  </li>
                  <li className="nav-item px-3 fw-semibold text-black">
                    <Link
                      to="/contacts"
                      className="nav-link text-decoration-none"
                    >
                      Contacts
                    </Link>
                  </li>
                  <li className="nav-item px-3 fw-semibold text-black">
                    <Link
                      to="/allproducts"
                      className="nav-link text-decoration-none"
                    >
                      Products
                    </Link>
                  </li>
                </ul>
                <form className="d-flex " role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                {isAuthenticated ? (
                  <div className="screen-set">
                    <button
                      className="btn btn-dark mx-3 "
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="screen-set">
                    <button
                      className="btn btn-dark mx-3"
                      onClick={() => loginWithRedirect()}
                    >
                      Log In
                    </button>
                  </div>
                )}
                {isAuthenticated ? (
                  <Link to="/cart">
                    <button
                      type="button"
                      className="btn btn-light position-relative screen-set mx-2 "
                    >
                      <i
                        className="fa-sharp fa-solid fa-cart-shopping fa-xl"
                        style={{ color: "#292929" }}
                      ></i>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                      </span>
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="btn btn-light position-relative screen-set mx-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-title="Please Login to visit the Page"
                  >
                    <i
                      className="fa-sharp fa-solid fa-cart-shopping fa-xl"
                      style={{ color: "#292929" }}
                    ></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {isAuthenticated ? { totalItems } : 0}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ProductNav;
