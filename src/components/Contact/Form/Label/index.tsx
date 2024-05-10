import { ReactNode } from "react"

type LabelProps = {
  name: string,
  description?: string,
  children?: ReactNode | ReactNode[],
}


export default function Label({ name, description, children }: LabelProps): JSX.Element {
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
};