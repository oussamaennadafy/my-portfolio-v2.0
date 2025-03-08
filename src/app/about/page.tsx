import { AboutHero } from '@/components/AboutHero'
import { WorkExperience } from '@/components/WorkExperience'
import { Workstation } from '@/components/Workstation'
import { Stack } from '@/components/Stack'
import { Awards } from '@/components/Awards'
import { Press } from '@/components/Press'
import { Footer } from '@/components/Footer'
import React from "react";

export const metadata = {
  title: 'About',
  description:
    "Hi, I'm oussama ennadafy, a passionate developer, Freelancer, and general technology enthusiast living in morocco.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WorkExperience />
      <Workstation />
      <Stack />
      <Awards />
      <Press />
      <Footer />
    </>
  )
}
