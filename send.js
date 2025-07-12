const twilio = require('twilio');
require('dotenv').config(); // 

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

// 
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

// 👇 
sendWhatsApp(
  '+918910733983', 
  'Hi! 👋 This is a test message from your WhatsApp CRM bot.'
);
