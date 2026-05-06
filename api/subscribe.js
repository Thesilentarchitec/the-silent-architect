const { Resend } = require('resend');
const { readSubscribers, writeSubscribers } = require('./storage');
const { EMAIL_SUBJECTS, EMAIL_BODIES } = require('./email-templates');
const fs = require('fs');
const path = require('path');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validate email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    const subscribers = readSubscribers();
    
    // Check if already subscribed
    const existing = subscribers.find(s => s.email === email);
    if (existing) {
      return res.status(200).json({ message: 'Already subscribed' });
    }

    // Store subscriber with timestamps
    const now = Date.now();
    const subscriber = {
      email,
      subscribedAt: now,
      email1Sent: now,      // Email 1 sent immediately
      email2Sent: null,     // Will be set when Email 2 is sent
      email3Sent: null,    // Will be set when Email 3 is sent
      email2Scheduled: now + (2 * 24 * 60 * 60 * 1000),  // 2 days from now
      email3Scheduled: now + (5 * 24 * 60 * 60 * 1000),  // 5 days from now
    };

    subscribers.push(subscriber);
    writeSubscribers(subscribers);

    // Send Email 1 immediately WITH PDF attachment
    const pdfPath = path.join(process.cwd(), 'toxic-workplace-guide.pdf');
    const hasPdf = fs.existsSync(pdfPath);

    const emailOptions = {
      from: 'The Silent Architect <onboarding@resend.dev>',
      to: email,
      subject: EMAIL_SUBJECTS[1],
      html: EMAIL_BODIES[1],
    };

    // Attach PDF if it exists
    if (hasPdf) {
      emailOptions.attachments = [{
        filename: 'Silent-Architect-Survival-Guide.pdf',
        content: fs.readFileSync(pdfPath, 'base64'),
        contentType: 'application/pdf',
      }];
    }

    await resend.emails.send(emailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Subscribed! Check your inbox for the free guide.' 
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
};