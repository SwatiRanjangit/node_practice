const dbConnection = require("./mongodb");

// dbConnection().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const main = async () => {
  // console.log("main called");
  let data = await dbConnection();
  data = await data.find({ brand: "Apple" }).toArray();
  console.warn(data);
};

main();
