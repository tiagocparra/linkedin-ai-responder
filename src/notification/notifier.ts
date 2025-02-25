import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Send a WhatsApp message
async function sendNotification(message: string) {
    await client.messages.create({
        body: message,
        from: process.env.TWILIO_NUMBER,
        to: process.env.TWILIO_TARGET_NUMBER
    })
}

export {sendNotification}