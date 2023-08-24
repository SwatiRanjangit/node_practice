const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

// POST API USING MONGOOSE
app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(req.body);
  res.send(req.body);
});

// GET METHOD
app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

// DELETE
app.delete("/delete/:_id", async (req, res) => {
  // console.log(req.params);
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

// PUT FOR UPDATE
app.put("/update/:_id", async (req, res) => {
  // console.log(req.params);
  let data = await Product.updateOne(req.params, { $set: req.body });

  res.send(data);
});

app.listen(8000);
