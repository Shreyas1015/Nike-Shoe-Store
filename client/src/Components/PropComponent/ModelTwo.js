import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ModelTwo = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
      <div>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-light position-relative screen-set mx-2"
        >
          <i
            className="fa-sharp fa-solid fa-cart-shopping fa-xl"
            style={{ color: "#292929" }}
          ></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {isAuthenticated ? { totalItems } : 0}
          </span>
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Please Login to Proceed To the cart
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-danger" data-bs-dismiss="modal">
                  Close
                </button>
                <button
                  onClick={() => loginWithRedirect()}
                  className="btn btn-success"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelTwo;
