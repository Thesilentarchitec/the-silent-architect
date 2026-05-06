const { Resend } = require('resend');
const { readSubscribers, writeSubscribers } = require('./storage');
const { EMAIL_SUBJECTS, EMAIL_BODIES } = require('./email-templates');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // This endpoint is called by Vercel Cron every minute
  // Add to vercel.json: { "crons": [{ "path": "/api/cron", "schedule": "* * * * *" }] }

  try {
    const subscribers = readSubscribers();
    const now = Date.now();
    let emailsSent = 0;

    for (const subscriber of subscribers) {
      // Check if Email 2 should be sent (2+ days since signup, not sent yet)
      if (!subscriber.email2Sent && now >= subscriber.email2Scheduled) {
        try {
          await resend.emails.send({
            from: 'The Silent Architect <onboarding@resend.dev>',
            to: subscriber.email,
            subject: EMAIL_SUBJECTS[2],
            html: EMAIL_BODIES[2],
          });
          subscriber.email2Sent = now;
          emailsSent++;
        } catch (e) {
          console.error(`Failed to send email 2 to ${subscriber.email}:`, e);
        }
      }

      // Check if Email 3 should be sent (5+ days since signup, not sent yet)
      if (!subscriber.email3Sent && now >= subscriber.email3Scheduled) {
        try {
          await resend.emails.send({
            from: 'The Silent Architect <onboarding@resend.dev>',
            to: subscriber.email,
            subject: EMAIL_SUBJECTS[3],
            html: EMAIL_BODIES[3],
          });
          subscriber.email3Sent = now;
          emailsSent++;
        } catch (e) {
          console.error(`Failed to send email 3 to ${subscriber.email}:`, e);
        }
      }
    }

    writeSubscribers(subscribers);

    return res.status(200).json({ 
      success: true, 
      processed: subscribers.length,
      emailsSent 
    });
  } catch (error) {
    console.error('Cron error:', error);
    return res.status(500).json({ error: 'Cron job failed' });
  }
};