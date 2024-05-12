import { NextResponse, NextRequest } from 'next/server'
import contactFormSchema, { contactFormSchemaType } from './services/schemas/contactFormSchema';
import formatZodErrorMessage from './services/utils/formatZodErrorMessage';
import { SafeParseReturnType } from 'zod';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const body = await request.json();
  const response: SafeParseReturnType<contactFormSchemaType,contactFormSchemaType> = contactFormSchema.safeParse(body);
  
  // If the request body is invalid, return a 400 error with the validation errors
  if (!response.success) {
    return NextResponse.json({ status: "error", message: formatZodErrorMessage(response) }, { status: 400 });
  }
}

export const config = {
  matcher: '/api/contact/email',
}