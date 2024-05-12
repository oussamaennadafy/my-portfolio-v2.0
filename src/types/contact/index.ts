// types of contact feature

export type contactFormDataType = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  expectedServices: {
    webDevelopment: boolean,
    mobileDevelopment: boolean,
    consulting: boolean,
    other: boolean,
  }
};