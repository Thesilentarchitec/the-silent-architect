const { Resend } = require('resend');
const { readSubscribers, writeSubscribers } = require('./storage');
const { EMAIL_SUBJECTS } = require('./email-templates');

const resend = new Resend(process.env.RESEND_API_KEY);

const PDF_EMAIL_HTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #f5f5f5; margin: 0; padding: 40px 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #121212; border: 1px solid rgba(212, 175, 55, 0.2); border-radius: 8px; padding: 40px; }
    .header { text-align: center; margin-bottom: 30px; }
    .logo { color: #d4af37; font-size: 24px; font-weight: bold; letter-spacing: 2px; }
    h1 { color: #d4af37; font-size: 28px; margin-bottom: 20px; text-align: center; }
    h2 { color: #ffffff; font-size: 20px; margin-top: 30px; margin-bottom: 15px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding-bottom: 10px; }
    p { color: #cccccc; line-height: 1.7; margin-bottom: 15px; }
    ul { color: #cccccc; line-height: 1.8; }
    li { margin-bottom: 8px; }
    strong { color: #d4af37; }
    .highlight { background-color: rgba(212, 175, 55, 0.1); border-left: 3px solid #d4af37; padding: 15px; margin: 20px 0; }
    .highlight p { color: #ffffff; margin: 0; }
    .cta { display: inline-block; background-color: #d4af37; color: #0a0a0a; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 4px; margin-top: 20px; text-align: center; }
    .cta:hover { background-color: #c5a028; }
    .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">SILENT<span style="color:#ffffff">ARCHITECT</span></div>
    </div>
    
    <h1>The Silent Architect's Guide to Surviving Toxic Workplaces</h1>
    
    <div class="highlight">
      <p><strong>Your Free Welcome Guide</strong></p>
    </div>
    
    <h2>The Reality Nobody Tells You</h2>
    <p>You already know something is wrong. You feel it Monday morning. In the passive-aggressive meeting. In the email that says "just checking in" but means "why haven't you responded yet."</p>
    <p>You've tried being more professional, setting boundaries, gray-rocking, communicating clearly. Nothing works. Because the system isn't broken — it's working exactly as designed. It needs you tired, compliant, and dependent.</p>
    
    <h2>The 5 Signs You're in a Toxic Environment</h2>
    <ul>
      <li><strong>You Leave Work More Exhausted Than When You Arrived</strong> — Normal jobs drain you physically. Toxic jobs drain you emotionally.</li>
      <li><strong>Your Identity Has Merged With Your Job Title</strong> — When someone criticizes your work, you feel like they're criticizing you.</li>
      <li><strong>You're Constantly Walking on Eggshells</strong> — You rehearse emails. You predict reactions. You manage everyone's emotions.</li>
      <li><strong>The Better You Perform, The More They Take</strong> — Toxic systems reward compliance with more work.</li>
      <li><strong>You Can't Imagine Quitting</strong> — Not because you want to stay — because leaving feels impossible. This is by design.</li>
    </ul>
    
    <h2>Your Immediate Action Plan</h2>
    
    <h3>Phase 1: Create the Emotional Firewall (Week 1)</h3>
    <p>Your job is not your identity. Your performance is not your worth. Repeat daily:</p>
    <div class="highlight">
      <p>"I am not my job title."<br>
      "My value exists outside this building."<br>
      "I am here to build something else."</p>
    </div>
    
    <h3>Phase 2: The Information Diet (Week 2-3)</h3>
    <p>Stop absorbing office drama. <strong>Only engage with information that serves your exit strategy.</strong></p>
    <ul>
      <li>Office gossip? Ignore.</li>
      <li>Political landmines? Navigate around.</li>
      <li>Emotional manipulation? Recognize and decline.</li>
    </ul>
    
    <h3>Phase 3: The Strategic Compliance (Ongoing)</h3>
    <p>Do exactly enough. Not minimum wage energy — but strategic energy. Every excess hour of "above and beyond" is an hour stolen from your exit architecture.</p>
    
    <h2>The 3 Emergency Responses</h2>
    <p>When cornered by a toxic person, use these:</p>
    <ul>
      <li><strong>The Pause:</strong> "I need to think about this and get back to you." — Buys 24 hours.</li>
      <li><strong>The Agreement:</strong> "Yes, that's an interesting perspective." — No engagement.</li>
      <li><strong>The Redirect:</strong> "Let's focus on the deliverable." — Strip emotion.</li>
    </ul>
    
    <h2>The Gray Rock Technique</h2>
    <p>Toxic people feed on reactions. Starve them.</p>
    <p>When attacked: <strong>1)</strong> Feel the emotion. Notice it. <strong>2)</strong> Give a flat, boring response. <strong>3)</strong> Exit mentally or physically.</p>
    
    <h2>The Exit Timeline</h2>
    <p>You need a real plan. Calculate your <strong>Exit Number:</strong></p>
    <ul>
      <li>How much do you need monthly to survive without this job?</li>
      <li>How much can you save while maintaining your sanity?</li>
      <li>How long until you reach that number?</li>
    </ul>
    <p>Most people can exit in <strong>12-24 months</strong> with the right strategy. You don't need to be rich. You need to be strategic.</p>
    
    <h2>What's Next?</h2>
    <p>This guide gave you tactics. <strong>The Blueprint gives you the complete architecture.</strong></p>
    <ul>
      <li>5 modules (Emotional Firewall → Surgical Exit)</li>
      <li>12 ready-to-use scripts for toxic scenarios</li>
      <li>The Grey Man Protocol</li>
      <li>Exit Calculator spreadsheet</li>
      <li>Lifetime updates</li>
    </ul>
    
    <div style="text-align: center; margin-top: 30px;">
      <a href="https://thesilentarchitec.gumroad.com/l/poqmvj" class="cta">Get the Blueprint → €28</a>
    </div>
    
    <div class="footer">
      <p>The system wants you to believe leaving is impossible. It's not.<br>
      The system wants you to believe you're trapped. You're not.<br>
      You need to architect your exit — strategically, silently, and completely.</p>
      <p>© 2024 Silent Architect. Build in Silence.</p>
    </div>
  </div>
</body>
</html>
`;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    const subscribers = readSubscribers();
    
    const existing = subscribers.find(s => s.email === email);
    if (existing) {
      return res.status(200).json({ message: 'Already subscribed' });
    }

    const now = Date.now();
    const subscriber = {
      email,
      subscribedAt: now,
      email1Sent: now,
      email2Sent: null,
      email3Sent: null,
      email2Scheduled: now + (2 * 24 * 60 * 60 * 1000),
      email3Scheduled: now + (5 * 24 * 60 * 60 * 1000),
    };

    subscribers.push(subscriber);
    writeSubscribers(subscribers);

    // Send Email 1 with full HTML guide content
    await resend.emails.send({
      from: 'The Silent Architect <onboarding@resend.dev>',
      to: email,
      subject: EMAIL_SUBJECTS[1],
      html: PDF_EMAIL_HTML,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Subscribed! Check your inbox for the free guide.' 
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
};