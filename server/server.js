const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const stripe = require("stripe")(
  "sk_test_51NR99USFBsMizJtqgugjwCzWBEka7nr355hR294tm3VNMVUxrz0YoIq1PY89wStYr0Fd6lAx1pP5xfp7LxdKELnl008ahGLLka"
);

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use(cors());

app.post("/create-checkout-session", async (req, res) => {
  const lineItems = req.body.lineItems;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while creating the checkout session.",
    });
  }
});

const endpointSecret =
  "whsec_b3b8782b2b1f4d4fd2ffdeb85c50a229c286c75bb959b5855245f108c35ee55c";

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    console.log(`Unhandled event type ${event.type}`);

    response.send();
  }
);
// Start the server
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
