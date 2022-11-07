import express from "express";
import data from "../Data.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    await res.send(data.products);
  } catch (error) {
    res.status(400).send("server error");
  }
});
router.get("/products/slug/:slug", async (req, res) => {
  try {
    const product = await data.products.find((x) => x.slug === req.params.slug);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send("page not found");
    }
  } catch (error) {
    res.status(400).send("server error");
  }
});
router.get("/products/:id", async (req, res) => {
  try {
    const product = await data.products.find((x) => x._id === req.params._id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send("page not found");
    }
  } catch (error) {
    res.status(400).send("server error");
  }
});

export default router;
