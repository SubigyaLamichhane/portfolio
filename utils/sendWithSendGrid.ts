import { MailDataRequired } from '@sendgrid/mail';

import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendWithSendGrid = async (messageData: string) => {
  console.log(messageData);
  const msg = {
    to: 'subigyalamichhane@gmail.com', // Change to your recipient
    from: 'subigyalamichhane@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: messageData,
    html: `<strong>${messageData}</strong>`,
  } as MailDataRequired;
  const response = await sgMail.send(msg);
  console.log(response);
  // .then(() => {
  //   console.log('Email sent');
  // })
  // .catch((error: any) => {
  //   console.error(error);
  // });
  return response;
};
