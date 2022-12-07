const express = require("express");
const productsRoute = require("./routes/ProductsRoute.js");
const cors = require("cors");
const checkoutRoute = require("./routes/CheckoutRoute");
const Stripe = require("stripe")(
  "sk_test_51M7zvDC6mu3hPc8Y3jrpe59yj7zjYXhJSkMXmkoRgrvCqpe6N3n6QF5NuWy902eWjkQ3sOjrRFDmGYmZOxdyuohX00MDSYZ50B"
);

const app = express();

const port = 8000;

app.use(cors());
app.use("/api/", productsRoute);
app.use(checkoutRoute);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`port started on: ${port}`);
});
