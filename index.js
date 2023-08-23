const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();
// app.use(reqFilter); // use to aplly middleware to all the routes.

// provide the middleware in route then use it where we want to apply middleware
route.use(reqFilter);

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

// use to apply middleware to only one route:
app.get("/users", (req, res) => {
  res.send("welcome to users page");
});

// by using router we can directly use it for middleware
route.get("/about", (req, res) => {
  res.send("welcome to about page");
});
route.get("/contact", (req, res) => {
  res.send("welcome to conatct page");
});

app.use("/", route);

app.listen(8000);
