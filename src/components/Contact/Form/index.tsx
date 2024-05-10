import { Button } from '@/components/Button'
import TextField from './TextField'
import CheckboxField from './CheckboxField'


export default function Form() {

  return (
    <form action="#" className="mt-10">
      <div className="space-y-7">
        <TextField
          label="Name"
          name="name"
          autoComplete="name"
          placeholder="oussama ennadafy"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="foobar@email.com"
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          aria-describedby="phone-description"
          placeholder="+1 (800) 123-4567"
        />
        <TextField
          label="Message"
          name="message"
          type="textarea"
          aria-describedby="message-description"
          placeholder="Tell me a little bit about your project..."
        />
        <fieldset>
          <legend className="block text-md font-medium leading-6 text-slate-900">
            Expected services
          </legend>
          <div className="mt-4 space-y-3">
            <CheckboxField label="Web development" name="web-development" />
            <CheckboxField label="Mobile development" name="mobile-developmen" />
            <CheckboxField label="Consulting" name="consulting" />
            <CheckboxField label="Other" name="other" />
          </div>
        </fieldset>
      </div>
      <div className="mt-10 border-t border-slate-200 pt-8">
        <Button className="w-full !text-base sm:!text-lg">
          Get started
        </Button>
      </div>
    </form>
  )
}