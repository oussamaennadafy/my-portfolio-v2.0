import clsx from 'clsx'
import { ReactNode } from 'react'

type ContainerProps = {
  className?: string,
  children: ReactNode[],
}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    />
  )
}
