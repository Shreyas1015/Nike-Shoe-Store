import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Model = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div>
        {/* Button trigger modal */}
        <button
          className="btn btn-dark my-3 me-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add To Cart
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          // tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          // aria-hidden="true"
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

export default Model;
