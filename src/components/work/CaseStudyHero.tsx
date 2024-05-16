import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'

function Tag({ tag }) {
  const tagSlug = tag.replace(/ /g, '-').toLowerCase()
  const href = `/work/categories/${tagSlug}`
  
  return (
    <li>
      <Link
        href={href}
        className="inline-block px-6 py-2 text-sm font-medium transition duration-200 ease-in-out rounded-full bg-slate-50 dark:bg-gray-950 text-slate-800 dark:text-gray-400 ring-1 ring-slate-100/80 dark:ring-gray-700 hover:bg-slate-100/95 dark:hover:bg-gray-900/40 hover:text-slate-800 dark:hover:text-gray-300 lg:text-md"
      >
        {tag}
      </Link>
    </li>
  )
}

export function CaseStudyHero({ title, subtitle, tags, coverImage }) {
  return (
    <section className="pt-16 overflow-hidden bg-white dark:bg-gray-950 sm:pt-20 lg:pt-28">
      <Container>
        <div className="max-w-lg mx-auto sm:max-w-3xl lg:mx-0 lg:max-w-none">
          <h1 className="text-4xl font-semibold leading-tight font-display text-slate-900 dark:text-gray-200 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
            {title} - {subtitle}
          </h1>
          <ul className="flex flex-wrap items-center gap-4 mt-8 sm:gap-6">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </ul>
        </div>
      </Container>
      <div className="relative block w-full mt-16 overflow-hidden aspect-h-9 aspect-w-16 md:aspect-h-2 md:aspect-w-5 lg:mt-20">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover w-full bg-slate-100 dark:bg-gray-950 dark:brightness-75"
          quality={90}
          priority
        />
      </div>
    </section>
  )
}
