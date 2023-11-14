const express = require("express");
const mailer = require("../nodeMailer");
const port = process.env.PORT || 5501;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   console.log(req);
// });
app.get("/", function (req, res) {
  console.log(res, req);
  res.json({ succes: true });
});
app.get("/test", function (req, res) {
  console.log(res, req);
  res.sendStatus(200);
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
