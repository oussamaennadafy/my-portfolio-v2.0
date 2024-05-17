import { useMDXComponent } from 'next-contentlayer/hooks';
import { MdxLink } from './MdxLink';
import { MdxImage } from './MdxImage';

const mdxComponents = {
  Link: MdxLink,
  Image: MdxImage,
};

export function MdxContent({ code }) {
  const Component = useMDXComponent(code);
  
  return <Component
    components={{
      h2: ({ children }) => (
        <h2 className={`dark:text-gray-300`}>{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className={`dark:text-gray-300`}>{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className={`dark:text-gray-300`}>{children}</h4>
      ),
      strong: ({ children, className }) => (
        <strong className={`dark:text-gray-300 ${className}`}>{children}</strong>
      ),
      ...mdxComponents
    }}
  />
};
