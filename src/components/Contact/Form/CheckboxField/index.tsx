type CheckboxFieldProps = {
  label: string, 
  name: string,
  checked: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxField({ label, name, checked, onChange }: CheckboxFieldProps): JSX.Element {
  return (
    <div className="flex items-start select-none">
      <div className="flex h-6 items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 rounded border-slate-300/80 bg-slate-50 dark:bg-gray-950 text-sky-600 shadow-sm dark:shadow-none shadow-sky-100/50 focus:outline-none focus:ring-transparent"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor={name} className="text-slate-700 dark:text-gray-400">
          {label}
        </label>
      </div>
    </div>
  )
}