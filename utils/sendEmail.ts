const mailgun = require('mailgun-js');
const DOMAIN = 'sandboxf84e7163a70a466382a8fb9f18d0a825.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

export const sendEmail = (messageData: string) => {
  const data = {
    from: 'subigya@email.com',
    to: 'subigyalamichhane@gmail.com',
    subject: 'Hello',
    text: messageData,
  };
  let sent = false;
  console.log(data);
  mg.messages().send(data, function (error: any, body: any) {
    console.log('body', body);
    sent = true;
  });
  return sent;
};
