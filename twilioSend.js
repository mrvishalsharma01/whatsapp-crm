const twilio = require('twilio');
require('dotenv').config(); // ✅ Load variables from .env

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

/**
 * Sends WhatsApp message to given number.
 * @param {string} to - WhatsApp number of lead (format: +91xxxxxxxxxx)
 * @param {string} message - Message to send
 */
async function sendWhatsApp(to, message) {
  try {
    const msg = await client.messages.create({
      from: fromWhatsAppNumber,
      to: `whatsapp:${to}`,
      body: message,
    });
    console.log(`✅ WhatsApp sent to ${to}: SID ${msg.sid}`);
  } catch (error) {
    console.error(`❌ Failed to send to ${to}:`, error.message);
  }
}

module.exports = { sendWhatsApp };
