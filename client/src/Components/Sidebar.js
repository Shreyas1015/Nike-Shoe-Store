import React from "react";
import Offcanvas from "./PropComponent/Offcanvas";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      <div>
        <div className="container sidebar-container m-5 d-flex justify-content-between p-3">
          <h2 className="mx-5 sidebar-h2">{props.pageName}</h2>
          <button
            className="btn btn-light sidebar-filter-btn btn-outline-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i
              className="fa-brands fa-windows fa-xl mx-2"
              style={{ color: "#292929" }}
            ></i>
            Show Filters
          </button>
        </div>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title fw-bold"
              id="offcanvasWithBothOptionsLabel"
            >
              ADD FILTERS
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            {/* shoesStore */}
            <div className="p-3 my-2 sidebar">
              <Link to="/shoestore">
                <Offcanvas title="Shoes Store" />
              </Link>
            </div>

            {/* SNKRS  */}
            <div className="p-3 my-2 sidebar">
              <Link to="/snkr">
                <Offcanvas title="SNKRS" />
              </Link>
            </div>

            {/* hoodies & Sweatshirts */}
            <div className="p-3 my-2 sidebar">
              <Link to="/hoodiesSweatshirts">
                <Offcanvas title="Hoodies & SweatShirts" />
              </Link>
            </div>

            {/* Football Shoes */}
            <div className="p-3 my-2 sidebar">
              <Link to="/footballShoes">
                <Offcanvas title="Football Shoes" />
              </Link>
            </div>

            {/* Accessories & equipment */}
            <div className="p-3 my-2 sidebar">
              <Link to="/acc">
                <Offcanvas title="Accessories & equipment" />
              </Link>
            </div>

            {/* Trousers & Tights */}
            <div className="p-3 my-2 sidebar">
              <Link to="/trouserTights">
                <Offcanvas title="Trousers & Tights" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
