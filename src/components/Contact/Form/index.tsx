import { Button } from '@/components/Button'
import TextField, { TextFieldOnChangeType } from './TextField'
import CheckboxField from './CheckboxField'
import { useState } from 'react';
import { contactFormDataType } from '@/types/contact';
import sendEmail from '@/services/sendEmail';
import chalk from 'chalk';

export default function Form() {
  const [formData, setFormData] = useState<contactFormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
    expectedServices: {
      webDevelopment: false,
      mobileDevelopment: false,
      consulting: false,
      other: false,
    }
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit: TextFieldOnChangeType = async (e) => {
    // prevent default form behavior
    e.preventDefault();

    // start loading
    setLoading(true);

    try {
      const res = await sendEmail(formData);
      console.log(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange: TextFieldOnChangeType = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target?.name]: e.target.value
    }))
  };

  const handleCheckboxChnage: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setFormData(prev => ({
      ...prev,
      expectedServices: {
        ...prev.expectedServices,
        [e.target?.name]: !prev.expectedServices[e.target?.name]
      }
    }))
  };

  return (
    <form action="#" className="mt-10">
      <div className="space-y-7">
        <TextField
          label="Name"
          name="name"
          autoComplete="name"
          placeholder="oussama ennadafy"
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="foobar@email.com"
          onChange={handleInputChange}
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          aria-describedby="phone-description"
          placeholder="+1 (800) 123-4567"
          onChange={handleInputChange}
        />
        <TextField
          label="Message"
          name="message"
          type="textarea"
          aria-describedby="message-description"
          placeholder="Tell me a little bit about your project..."
          onChange={handleInputChange}
        />
        <fieldset>
          <legend className="block text-md font-medium leading-6 text-slate-900">
            Expected services
          </legend>
          <div className="mt-4 space-y-3">
            <CheckboxField onChange={handleCheckboxChnage} checked={formData.expectedServices.webDevelopment} label="Web development" name="webDevelopment" />
            <CheckboxField onChange={handleCheckboxChnage} checked={formData.expectedServices.mobileDevelopment} label="Mobile development" name="mobileDevelopment" />
            <CheckboxField onChange={handleCheckboxChnage} checked={formData.expectedServices.consulting} label="Consulting" name="consulting" />
            <CheckboxField onChange={handleCheckboxChnage} checked={formData.expectedServices.other} label="Other" name="other" />
          </div>
        </fieldset>
      </div>
      <div className="mt-10 border-t border-slate-200 pt-8">
        <Button onClick={handleSubmit} className="w-full !text-base sm:!text-lg">
          {
            loading ? <span>Loading...</span>: <span>Get in touch</span>
          }
        </Button>
      </div>
    </form>
  )
}