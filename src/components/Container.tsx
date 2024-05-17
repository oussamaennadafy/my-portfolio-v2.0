import clsx from 'clsx'
import { ReactNode } from 'react'

type ContainerProps = {
  className?: string,
  children: ReactNode | ReactNode[],
  // ref: React.RefObject<HTMLDivElement>,
  ref?: (node?: Element) => void,
}

export function Container({ className, ref, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8',
        className
      )}
      ref={ref}
      {...props}
    />
  )
}
