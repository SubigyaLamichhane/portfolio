// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendSMS } from '../../utils/sendSMS';

type Data = {
  sent: boolean;
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    if (req.body.message) {
      const messageData: MessageData = req.body.message;
      const { name, email, message } = messageData;
      const messageToSend = `${name} (${email}): ${message}`;
      const sent = sendSMS(messageToSend);
      res.status(200).json({ sent });
    } else if (req.body.projectDetails) {
      const projectDetailsData: ProjectDetailsData = req.body.projectDetails;
      const { name, email, projectDetails, budget, timeline } =
        projectDetailsData;
      const messageToSend = `name: ${name} 
        email: (${email}) 
        project details: ${projectDetails} 
        budget: ${budget} 
        timeline: ${timeline}`;
      const sent = sendSMS(messageToSend);
      res.status(200).json({ sent });
    }
  }
}
