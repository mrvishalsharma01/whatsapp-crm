const { getSheetData } = require('./googleSheet');
const { sendWhatsApp } = require('./twilioSend');

async function startAutomation() {
  const leads = await getSheetData();

  for (let lead of leads) {
    const {
      name,
      phone,
      status,
      createdAt,
      propertyAddress = '',
      agentName = '',
      appointmentTime = '',
    } = lead;

    const toNumber = phone.startsWith('+') ? phone : `+${phone}`;
    let message = '';

    switch (status.toLowerCase()) {
      case 'new lead':
        message = `Hi ${name}, thanks for your interest in our properties! To help us find the perfect match, could you tell us what type of property you're looking for and your preferred location?`;
        break;

      case 'preferences captured':
        message = `Great news, ${name}! We've found a few properties that might interest you based on your preferences. Check them out here: [Link to property 1], [Link to property 2]. Let me know if you'd like more details or to schedule a viewing.`;
        break;

      case 'documents requested':
        message = `Hi ${name}, just a friendly reminder about the documents we discussed for your property search. Please let me know if you need any assistance or have questions.`;
        break;

      case 'appointment set':
        message = `Your property viewing is confirmed for ${createdAt} at ${appointmentTime} at ${propertyAddress}. Your agent, ${agentName}, will meet you there. We look forward to seeing you!`;
        break;

      case 'reminder':
        message = `Just a quick reminder about your property viewing today at ${appointmentTime} at ${propertyAddress}. See you soon!`;
        break;

      case 'viewed':
        message = `Thank you for visiting the property today, ${name}! We hope you found it helpful. Do you have any initial thoughts or questions we can help with?`;
        break;

      case 'offer submitted':
        message = `Hi ${name}, your offer has been submitted. We’ll keep you updated on the next steps.`;
        break;

      case 'offer accepted':
        message = `Great news, ${name}! Your offer for ${propertyAddress} has been accepted! We'll be in touch shortly with the next steps.`;
        break;

      case 'inspection scheduled':
        message = `Reminder: Your property inspection for ${propertyAddress} is scheduled for ${createdAt}. Please ensure you've reviewed the inspector's report before then.`;
        break;

      case 'closing soon':
        message = `Exciting news, ${name}! Your closing for ${propertyAddress} is set for ${createdAt}. We're almost there!`;
        break;

      case 'deal closed':
        message = `Congratulations on your new home, ${name}! We wish you all the best in your new property. Please don't hesitate to reach out if you have any questions or need assistance in the future.`;
        break;

      case 'annual check-in':
        message = `Hello ${name}, just checking in and thought you might be interested in the latest market trends in your neighborhood: [Link to market report]. Hope you're enjoying your home!`;
        break;

      default:
        message = `Hi ${name}, thank you for staying connected with us. Let us know how we can help you next.`;
    }

    if (message) {
      await sendWhatsApp(toNumber, message);
    }
  }
}

startAutomation();
