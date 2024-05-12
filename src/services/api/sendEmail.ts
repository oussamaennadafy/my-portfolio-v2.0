import { contactFormDataType } from "@/types/contact";

async function sendEmail(contactFormData: contactFormDataType): Promise<Response> {
  const apiEndpoint: RequestInfo | URL = '/api/contact/email';

  const options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(contactFormData),
  };

  const res: Response = await fetch(apiEndpoint, options);
  return res;
}

export default sendEmail;