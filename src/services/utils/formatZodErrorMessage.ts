import { SafeParseReturnType } from "zod";
import { contactFormSchemaType } from "../schemas/contactFormSchema";

const formatZodErrorMessage = (response: SafeParseReturnType<contactFormSchemaType,contactFormSchemaType>) => {
  const message = response.error?.errors?.[0].message;

  const field = response.error.errors[0].path[0];
  
  if(message === "Required") return `${field} is required`

  return message;
}


export default formatZodErrorMessage;