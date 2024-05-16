import Image from 'next/image'

export function MdxImage({ alt, caption, src, ...props }) {
  return (
    <figure>
      <Image className="w-full h-auto rounded-lg" src={src} {...props} alt={alt} />
      {caption && (
        <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-gray-200">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
