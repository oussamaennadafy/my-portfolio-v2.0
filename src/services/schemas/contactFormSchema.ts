import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().min(1, { message: "Required" }).email(),
  phone: z.string().optional(),
  message: z.string().min(1, { message: "Required" }),
  expectedServices: z.object({
    webDevelopment: z.boolean(),
    mobileDevelopment: z.boolean(),
    consulting: z.boolean(),
    other: z.boolean(),
  }),
});

export type contactFormSchemaType = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  expectedServices?: {
    webDevelopment?: boolean,
    mobileDevelopment?: boolean,
    consulting?: boolean,
    other?: boolean,
  }
}

export default contactFormSchema;