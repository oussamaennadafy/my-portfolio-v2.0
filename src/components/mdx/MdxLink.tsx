import Link from 'next/link'

export function MdxLink({ href, ...props }) {
  return (
    <Link className='dark:text-gray-400' href={href} {...props}>
      {props.children}
    </Link>
  )
}
