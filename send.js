const twilio = require('twilio');
require('dotenv').config(); // Load .env variables

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

// 👇 Yaha message bhejne ka function call karo
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

// 👇 Yaha apna WhatsApp number daalo (jo sandbox me linked hai)
sendWhatsApp(
  '+918910733983', // <-- apna number yaha daalna, sandbox linked wala
  'Hi! 👋 This is a test message from your WhatsApp CRM bot.'
);
