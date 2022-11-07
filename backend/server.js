import express from "express";
import productsRoute from "./routes/ProductsRoute.js";
import cors from "cors";

const app = express();

const port = 5000;

app.use(cors());
app.use("/api/", productsRoute);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`port started on: ${port}`);
});
