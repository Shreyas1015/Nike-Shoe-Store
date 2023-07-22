import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductNav from "../Components/ProductNav";
import Footer from "../Components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NR99USFBsMizJtqkTEVzg5NH5krlCPORUl2YLORi7ZfwmINPiYXFE33nHAoDMymOE5XByoIchUj7GnsrG7J1ZNB00Bv8WPufs"
);

const CartPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [paymentError, setPaymentError] = useState(null);

  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  console.log(cartItems);
  const handleDelete = (itemId) => {
    // Filter out the item with the given id from the cart items
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

    // Update the cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Force a re-render of the component to reflect the updated cart items
    window.location.reload();
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
        },
        unit_amount: item.price * 100, // Stripe expects the price in cents
      },
      quantity: item.quantity,
    }));

    try {
      const session = await fetch(
        " http://localhost:3001/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lineItems }),
        }
      ).then((res) => res.json());

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        setPaymentError(result.error.message);
      }
    } catch (error) {
      console.log(error);
      setPaymentError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <ProductNav />
      <div className="container-fluid">
        <div className="container">
          {isAuthenticated && (
            <div className="row text-center mb-5">
              <h3 className="text-start my-5">Profile Details</h3>
              <hr />
              <div className="col-lg-2 col-6 text-start border-end">
                <img
                  className="rounded-circle"
                  src={user.picture}
                  alt="No Pic available"
                />
              </div>

              <div className="col-lg-2 col-6 border-end">
                <h4 className="py-4">{user.name}</h4>
              </div>
              <div className="col-lg-3 col-12">
                <p className="py-4">{user.email}</p>
              </div>
            </div>
          )}
          <h2 className="my-4">Your Cart</h2>
          <hr />
          <div className="row">
            <div className="col-lg-9">
              {cartItems.map((item) => (
                <div className="row" key={item.id}>
                  <div
                    className="col-lg-3 col-3 text-center p-3 border"
                    style={{ height: "20vh" }}
                  >
                    <img
                      src={item.image}
                      alt="Product"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div
                    className="col-lg-3 col-3 text-center p-4 border cart-table"
                    style={{ height: "20vh" }}
                  >
                    <h5 className="mt-4 cart-h5">{item.title}</h5>
                  </div>
                  <div
                    className="col-lg-2 col-2 text-center p-4 border cart-table"
                    style={{ height: "20vh" }}
                  >
                    <p className="mt-4">{item.quantity}</p>
                  </div>
                  <div
                    className="col-lg-2 col-2 text-center p-4 border cart-table"
                    style={{ height: "20vh" }}
                  >
                    <p className="mt-4">{item.price}</p>
                  </div>
                  <div
                    className="col-lg-2 col-2 text-center p-4 border cart-table"
                    style={{ height: "20vh" }}
                  >
                    <button
                      className="btn btn-danger mt-4"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i
                        className="fa-sharp fa-solid fa-trash"
                        style={{ color: " #ffffff" }}
                      ></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-3  p-4 border">
              <h2 className="border text-center p-2">Total Amount</h2>
              <div className="row mt-5">
                <div className="col-lg-12">
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <p>
                        {item.title}: &#8377; {item.price * item.quantity}.00
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <p>Total Price: &#8377; {totalPrice}.00</p>

              {cartItems.length > 0 && (
                <button
                  className="btn btn-success mt-3"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              )}

              {paymentError && (
                <p className="text-danger mt-3">{paymentError}</p>
              )}
              <Link to="/acc" className="btn btn-dark mt-3">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
