const dbConnection = require("./mongodb");
const insert = async () => {
  const db = await dbConnection();
  const result = await db.insertMany([
    {
      name: "note 5",
      brand: "vivo",
      price: 3200,
      category: "mobile",
    },
    {
      name: "note 10",
      brand: "IQOO",
      price: 4500,
      category: "mobile",
    },
    {
      name: "note 10",
      brand: "Nokia",
      price: 5400,
      category: "mobile",
    },
  ]);

  if (result.acknowledged) {
    console.log("data inserted!");
  }
};

insert();
