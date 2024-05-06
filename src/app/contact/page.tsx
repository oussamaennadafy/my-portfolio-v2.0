import Contact from '@/components/Contact'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Contact me',
  description:
    "Whether you're looking to kickstart a new web project or simply want to say hi, feel free to get in touch.",
}

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  )
}
