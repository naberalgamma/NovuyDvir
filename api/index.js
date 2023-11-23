const nodemailer = require("nodemailer");
async function main(data) {
  const transporter = nodemailer.createTransport({
    // service: "ukr",
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: "test202311@ukr.net", // sender address
    to: "dotafight@gmail.com", // list of receivers
    subject: "Передзвоніть мені!", // Subject line
    text: `tel: ${data?.phone}, name: ${data?.name}, email: ${data?.email}`,
    html: `tel: ${data?.phone ? data?.phone : "дані відсутні"}, name: ${
      data?.name ? data?.name : "дані відсутні"
    }, email: ${data?.email ? data?.email : "дані відсутні"}`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("checkpoint1");

app.post("/api/form", async (req, res) => {
  await main(req.body);
  res.sendStatus(200);
});

module.exports = app;
