const express = require("express");
const dbConnection = require("./mongodb");

const app = express();
const mongodb = require("mongodb");

app.use(express.json());

// GET API

app.get("/", async (req, res) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  res.send(data);
});

//POST API

app.post("/", async (req, res) => {
  console.log(req.body);
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  res.send(result);
});

// PUT API
app.put("/:name", async (req, res) => {
  //   console.log(req.body);
  let data = await dbConnection();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(req.body);
});

//DELETE API
app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  const data = await dbConnection();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});
app.listen(8000);
