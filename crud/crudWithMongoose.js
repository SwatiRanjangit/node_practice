const mongoose = require("mongoose");

// COONECT WITH MOGODB DATABSE USING MONGOOSE
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

// INSERTING DATA USING MONGOOSE
const saveInDB = async () => {
  const productModel = mongoose.model("products", ProductSchema);

  const data = new productModel({
    name: "Note Max pro",
    price: 2500,
    brand: "Mi",
    category: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};
// saveInDB();

const updateInDB = async () => {
  const product = mongoose.model("products", ProductSchema);
  let data = await product.updateOne(
    { name: "Note pro" },
    { $set: { price: 3000 } }
  );
  console.log(data);
};

// updateInDB();

//DELETE IN DATABASE
const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.deleteOne({ name: "Note pro" });
  console.log(data);
};

// deleteInDB();

// FIND or Search IN DATABASE
const findInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  // let data = await Product.find();  // to show all the records of database
  let data = await Product.find({ name: "Note pro" });
  console.log(data);
};

// findInDB();
