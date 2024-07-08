
const axios = require("axios");
require('dotenv').config();
var sib = require("sib-api-v3-sdk");
var client = sib.ApiClient.instance;
var apiKey = client.authentications["api-key"];

apiKey.apiKey =
process.env.BREVO_API_KEY


async function sendOTP(recipientEmail, otp) {
  const templateId = 7;

  const requestPayload = {
    sender: { name: "NeoSaturn", email: "ns.mas.admin@neosaturn.in" },
    to: [{ email: recipientEmail }],
    templateId: templateId,
    params: { otp: otp }, // Add the OTP parameter here
  };

  try {
    const response = await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      requestPayload,
      {
        headers: { "api-key": apiKey.apiKey },
      }
    );

    // TODO : Rather than console logging, save this in logs 
    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error.response.data);
  }
}

module.exports = sendOTP;