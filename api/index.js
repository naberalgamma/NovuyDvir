const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");
// dotenv.config();

// async..await is not allowed in global scope, must use a wrapper
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
  // send mail with defined transport object
  console.log("it start");
  console.log(data);
  try {
    const info = await transporter.sendMail({
      from: "test202311@ukr.net", // sender address
      to: "dotafight@gmail.com", // list of receivers
      subject: "Передзвоніть мені!", // Subject line
      // text: `Номер телефону:${phone ? phone : ""}, пошта:${
      //   mail ? mail : ""
      // }, ім'я:${nameUser ? nameUser : ""}`, // plain text body
      text: `tel: ${data?.phone}, name: ${data?.name}, email: ${data?.email}`,
      html: `tel: ${data?.phone ? data?.phone : "дані відсутні"}, name: ${
        data?.name ? data?.name : "дані відсутні"
      }, email: ${data?.email ? data?.email : "дані відсутні"}`, // html body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

// main().catch(console.error);

// module.exports = { main };

const express = require("express");
// const mailer = require("../nodeMailer");
// const port = process.env.PORT || 5501;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("checkpoint1");

app.post("/api/form", async (req, res) => {
  await main(req.body);
  // res.sendStatus(200);
  // res.status(200).redirect("https://novuy-dvir.vercel.app");
});

// const test = app.listen(5501, "127.0.0.1", () => {
//   console.log("serverStart");
//   console.log(test.address());
// });
module.exports = app;

// Object.defineProperty(exports, "__esModule", { value: true });
//  function handler(req, res) {
//   console.log("it's req:", req);
//   console.log("it's res:", res);
//    main(req.body);
//   return res.json({
//     message: "Hello ".concat(req.name, "!"),
//   });
// }
// exports.default = handler;
