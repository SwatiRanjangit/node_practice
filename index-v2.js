const express = require("express");

const app = express();

app.get("", (req, res) => {
  console.log("data sent by browser as param= ", req.query);
  // res.send("welcome " + req.query.name);
  res.send(`
  <h1>welcome to the home page</h1>
  <a href="/about">Go to about page</a>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder="user name" value="${req.query.name}"/>
  <button>click</button>
  <a href="/">Go to home page</a>
   `);
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "swati",
      email: "swati@gmail.com",
    },
    {
      name: "sam",
      email: "sam@gmail.com",
    },
  ]);
});

app.listen(8000);
