import Label from "../Label"

export type TextFieldOnChangeType = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

type TextFieldProps = {
  label: string,
  name: string,
  type?: string,
  rows?: number,
  className?: string,
  autoComplete?: string, 
  placeholder?: string,
  onChange?: TextFieldOnChangeType,
  required?: boolean,
  value?: string,
}

const inputClasses =
'block w-full px-4 py-4 leading-4 transition-colors duration-200 ease-in-out border-0 shadow-sm rounded-xl bg-slate-50 dark:bg-gray-950 text-md text-slate-900 dark:text-gray-200 shadow-sky-100/50 dark:shadow-none ring-1 ring-inset ring-slate-200 dark:ring-gray-700 placeholder:text-slate-400 dark:placeholder:text-slate-600 hover:bg-white focus:border-0 focus:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600/60';


export default function TextField({
  label,
  name,
  type = 'text',
  rows = 5,
  className,
  required = true,
  ...props
}: TextFieldProps): JSX.Element {
  return (
    <div className={className}>
      {label && <Label description={!required && "optional"} name={name}>{label}</Label>}
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