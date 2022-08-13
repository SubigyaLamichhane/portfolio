// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../utils/sendEmail';
import { sendSMS } from '../../utils/sendSMS';
import { sendWithSendGrid } from '../../utils/sendWithSendGrid';
import sgMail, { MailDataRequired } from '@sendgrid/mail';

type Data = {
  sent: boolean;
  email: any;
  // sms: any;
};

type MessageData = {
  name: string;
  email: string;
  message: string;
};

type ProjectDetailsData = {
  name: string;
  email: string;
  projectDetails: string;
  budget: string;
  timeline: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    if (req.body.message) {
      const messageData: MessageData = req.body.message;
      const { name, email, message } = messageData;
      const messageToSend = `${name} (${email}): ${message}`;
      // let SMSResponse: any;
      // try {
      //   SMSResponse = await sendSMS(messageToSend);
      // } catch (error) {
      //   SMSResponse = error;
      // }

      let emailResponse: any;
      try {
        emailResponse = await sendWithSendGrid(messageToSend);
      } catch (error) {
        emailResponse = error;
      }
      res.status(200).json({ sent: true, email: emailResponse });
    } else if (req.body.projectDetails) {
      const projectDetailsData: ProjectDetailsData = req.body.projectDetails;
      const { name, email, projectDetails, budget, timeline } =
        projectDetailsData;
      const messageToSend = `name: ${name} 
        email: (${email}) 
        project details: ${projectDetails} 
        budget: ${budget} 
        timeline: ${timeline}`;
      // let SMSResponse: any;
      // try {
      //   SMSResponse = await sendSMS(messageToSend);
      // } catch (error) {
      //   SMSResponse = error;
      // }

      let emailResponse: any;
      try {
        emailResponse = await sendWithSendGrid(messageToSend);
      } catch (error) {
        emailResponse = error;
      }
      res.status(200).json({ sent: true, email: emailResponse });
    }
  }
}
