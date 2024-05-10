import Label from "../Label"

type TextFieldProps = {
  label: string,
  name: string,
  type?: string,
  rows?: number,
  className?: string,
  autoComplete?: string, 
  placeholder?: string, 
}

const inputClasses =
'block w-full px-4 py-4 leading-4 transition-colors duration-200 ease-in-out border-0 shadow-sm rounded-xl bg-slate-50 text-md text-slate-900 shadow-sky-100/50 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 hover:bg-white focus:border-0 focus:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600/60'


export default function TextField({
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