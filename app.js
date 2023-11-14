const express = require("express");
const mailer = require("./nodeMailer");
const port = process.env.PORT || 5501;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   console.log(req);
// });
app.get("/", function (req, res) {
  res.sendfile("public/main.html");
});

app.post("/form", (req, res) => {
  mailer.main(req.body);
  res.sendStatus(200);
});

// const test = app.listen(5501, "127.0.0.1", () => {
//   console.log("serverStart");
//   console.log(test.address());
// });
module.exports = app;
