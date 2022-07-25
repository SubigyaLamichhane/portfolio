const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

interface Response {
  sid: string;
  date_created: string;
  date_updated: string;
  date_sent: null;
  account_sid: string;
  to: string;
  from: null;
  messaging_service_sid: string;
  body: string;
  status: string;
  num_segments: string;
  num_media: string;
  direction: string;
  api_version: string;
  price: null | string;
  price_unit: null | string;
  error_code: null | string;
  error_message: null | string;
  uri: string;
  subresource_uris: {
    media: string;
  };
}

export const sendSMS = (message: string) => {
  let sent = false;
  client.messages
    .create({
      body: message,
      messagingServiceSid: process.env.MESSSAGE_SERVICE_SID,
      to: '+9779803810977',
    })
    .then((message: Response) => {
      sent = true;
      console.log(message);
    })
    .done();
  return sent;
};
