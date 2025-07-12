# 🏡 Real Estate WhatsApp CRM Automation

This is a Node.js based WhatsApp automation system that reads lead data from a Google Sheet and sends personalized WhatsApp messages using Twilio WhatsApp Sandbox API — exactly as described in the assignment.

---

## ✅ Features
- Google Sheets used as CRM
- Twilio WhatsApp API (sandbox) for messaging
- 12 status-based WhatsApp flows (e.g. New Lead, Appointment Set, Deal Closed)
- Fully personalized messages (name, property, agent, time)
- Logs message SIDs in terminal
- Secure config via `.env` and service account JSON

---

## 🧠 Use Cases Covered

| Status                | Action Taken                                                                 |
|------------------------|------------------------------------------------------------------------------|
| New Lead              | Welcome message + asks for property type & location                          |
| Preferences Captured  | Sends property match links                                                   |
| Documents Requested   | Reminder to submit documents                                                 |
| Appointment Set       | Confirmation message with date, time, location, and agent                    |
| Reminder              | Pre-appointment reminder                                                     |
| Viewed                | Post-viewing thank you and feedback request                                  |
| Offer Submitted       | Confirms offer was received                                                  |
| Offer Accepted        | Sends acceptance message with property details                               |
| Inspection Scheduled  | Reminder about property inspection                                           |
| Closing Soon          | Reminder about upcoming closing                                              |
| Deal Closed           | Congratulations on closing the deal                                          |
| Annual Check-in       | Sends a market update + check-in message                                     |

---

## ⚙️ Tech Stack

- **Node.js** – for backend scripting
- **Twilio WhatsApp API** (sandbox) – for sending messages
- **Google Sheets API** – to pull lead data as CRM
- **dotenv** – to manage environment variables securely

---

## 📁 Project Structure
whatsapp-crm/
├── index.js # Main script with status logic
├── googleSheet.js # Handles Google Sheets data
├── twilioSend.js # Sends WhatsApp messages via Twilio
├── credentials.json # Google service account file (not pushed)
├── .env # Twilio API keys (not pushed)
├── .gitignore # To hide sensitive files from Git
├── README.md # Full documentation (this file)


**Working Video**

