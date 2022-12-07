const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { default: Stripe } = require("stripe");

router.post(
  "/api/checkout",
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
      lineItems.push({
        price: item.id,
        quantity: item.quantity,
      });
    });
    const session = await Stripe.Checkout.session.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });
    res.send(
      JSON.stringify({
        url: session.url,
      })
    );
  })
);

module.exports = router;
