import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { StackIconsRow } from '@/components/StackIconsRow'
import { FeaturedWork } from '@/components/work/FeaturedWork'
import { FeaturedPosts } from '@/components/blog/FeaturedPosts'
import { Footer } from '@/components/Footer'
import React from "react";
import { appMetadata } from '@/meta/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = appMetadata;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <StackIconsRow />
      <FeaturedWork />
      <FeaturedPosts />
      <Footer />
    </>
  )
}
