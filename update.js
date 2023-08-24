const dbConnection = require("./mongodb");

const updateData = async () => {
  let data = await dbConnection();
  let result = await data.updateOne(
    { name: "note 10" },
    { $set: { name: "max pro 6", price: 5000 } }
  );
};

updateData();
