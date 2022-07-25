const accountSid = 'ACe9b7eef48294cd0a5c69874a7ce0227c';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);

interface Response {
  sid: string;
  date_created: 'Mon, 25 Jul 2022 05:13:55 +0000';
  date_updated: 'Mon, 25 Jul 2022 05:13:55 +0000';
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

export const sendSMS = () => {
  client.messages
    .create({
      body: 'This is the message will it work',
      messagingServiceSid: 'MGc6b568d570fc4d73e9ebe1c2a2176150',
      to: '+9779803810977',
    })
    .then((message: Response) => console.log(message.sid))
    .done();
};

sendSMS();
