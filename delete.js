const dbConnection = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnection();
  let result = await data.deleteMany({ name: "note 5" });

  if (result.acknowledged) {
    console.log("record deleted");
  }
};

deleteData();
