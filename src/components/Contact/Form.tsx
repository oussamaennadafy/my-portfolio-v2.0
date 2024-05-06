import { Button } from '@/components/Button'
import { ReactNode } from 'react'


type LabelProps = {
  name: string,
  description?: string,
  children?: ReactNode | ReactNode[],
}

type TextFieldProps = {
  label: string,
  name: string,
  type?: string,
  rows?: number,
  className?: string,
  autoComplete?: string, 
  placeholder?: string, 
}

type CheckboxFieldProps = {
  label: string, 
  name: string,
}



export default function Form() {
  const inputClasses =
    'block w-full px-4 py-4 leading-4 transition-colors duration-200 ease-in-out border-0 shadow-sm rounded-xl bg-slate-50 text-md text-slate-900 shadow-sky-100/50 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 hover:bg-white focus:border-0 focus:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600/60'

  function Label({ name, description, children }: LabelProps): JSX.Element {
    return (
      <div className="flex justify-between text-md leading-6">
        <label htmlFor={name} className="block font-medium text-slate-900">
          {children}
        </label>
        {description && (
          <p id={`${name}-description`} className="text-slate-500/80">
            {description}test
          </p>
        )}
      </div>
    )
  }

  function TextField({
    label,
    name,
    type = 'text',
    rows = 5,
    className,
    ...props
  }: TextFieldProps): JSX.Element {
    return (
      <div className={className}>
        {label && <Label name={name}>{label}</Label>}
        <div className="mt-2">
          {type === 'textarea' ? (
            <textarea
              id={name}
              name={name}
              rows={rows}
              {...props}
              className={inputClasses}
            />
          ) : (
            <input
              id={name}
              name={name}
              type={type}
              {...props}
              className={inputClasses}
            />
          )}
        </div>
      </div>
    )
  }

  function CheckboxField({ label, name }: CheckboxFieldProps): JSX.Element {
    return (
      <div className="flex items-start select-none">
        <div className="flex h-6 items-center">
          <input
            id={name}
            name={name}
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300/80 bg-slate-50 text-sky-600 shadow-sm shadow-sky-100/50 focus:outline-none focus:ring-transparent"
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor={name} className="text-slate-700">
            {label}
          </label>
        </div>
      </div>
    )
  }

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