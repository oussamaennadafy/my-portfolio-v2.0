import { contactFormDataType } from "@/types/contact";

async function sendEmail(contactFormData: contactFormDataType) {
  const apiEndpoint: RequestInfo | URL = '/api/email';

  const options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(contactFormData),
  };

  const res: Response = await fetch(apiEndpoint, options);
  const responseData = await res.json();
  return responseData;
}

export default sendEmail;