const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (_, res) => {
  const user = {
    name: "swati",
    city: "nawada",
    skills: ["java", "c++", "php"],
  };
  res.render("profile", { user });
});

app.get("/login", (_, res) => {
  res.render("login");
});
// app.get("/about", (_, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });
// app.get("/*", (_, res) => {
//   res.sendFile(`${publicPath}/pageNotFound.html`);
// });

app.listen(8000);
