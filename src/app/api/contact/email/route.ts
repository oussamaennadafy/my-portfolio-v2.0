import contactFormSchema from '@/services/schemas/contactFormSchema';
import DefaultResponseType from '@/types/common/responseType';
import { contactFormDataType } from '@/types/contact';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest): Promise<NextResponse<DefaultResponseType>> {
  // validate request
  const {
    name,
    email,
    phone,
    message,
    expectedServices: {
      webDevelopment,
      mobileDevelopment,
      consulting,
      other,
    } }: contactFormDataType = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from portfolio form`,
    html: `
      <strong>name</strong>: <h1>${name}</h1>,

      <strong>email</strong>: <h1>${email}</h1>,

      <strong>phone</strong>: <h1>${phone}</h1>,
      
      <strong>message</strong>: <h1>${message}</h1>,

      <strong>expectedServices: </strong> 
      <h2>
      {
        webDevelopment: ${webDevelopment},
        mobileDevelopment: ${mobileDevelopment},
        consulting: ${consulting},
        other: ${other},
      }
      </h2>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    const message = await sendMailPromise();
    return NextResponse.json({ status: 'success', message }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ status: "fail", message: err }, { status: 500 });
  }
};