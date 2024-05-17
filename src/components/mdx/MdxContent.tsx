import { useMDXComponent } from 'next-contentlayer/hooks'
import { MdxLink } from './MdxLink'
import { MdxImage } from './MdxImage'

const mdxComponents = {
  Link: MdxLink,
  Image: MdxImage,
}

export function MdxContent({ code }) {
  const Component = useMDXComponent(code)

  return <Component
    components={{
      h1: ({ children, className }) => (
        <h2 className={`test ${className}`}>{children}</h2>
      ),
      // ...mdxComponents
    }}
  />
}
