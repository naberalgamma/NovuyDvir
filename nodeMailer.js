"use strict";
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

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

// async..await is not allowed in global scope, must use a wrapper
async function main(data) {
  // send mail with defined transport object
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
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

// main().catch(console.error);

module.exports = { main };
