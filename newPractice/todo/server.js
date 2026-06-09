require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Testing only
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("Gmail SMTP Connected");
  }
});

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/send-email", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "bisht65190@gmail.com",
      subject: "Welcome",
      html: `
        <h1>Welcome Deepak 👋</h1>
        <p>Email OTP 5896</p>
      `,
    });

    console.log("Message ID:", info.messageId);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Email Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});