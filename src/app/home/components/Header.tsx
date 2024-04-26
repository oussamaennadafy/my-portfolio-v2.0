"use client"

import { PrimaryButton } from '@/common'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BurgerIcon } from '../../../../public/icons'
import { useRouter, useSearchParams } from 'next/navigation'

function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isModalVisible = searchParams.get("isModalVisible");

  const handleMenyClick = () => {
    if(isModalVisible) {
      router.back();
    } else {
      router.push(`?isModalVisible=1`, { scroll: false })
    }
  }
  
  return (
    <header className="flex items-center justify-between py-7 px-5 border-b border-borderBackground border-opacity-50">
      <Link
        href="/"
      >
        <Image
          src="/images/logo.webp"
          width={85}
          height={85}
          alt="Picture of the author"
        />
      </Link>
      <div className="relative w-44 flex items-center justify-between gap-3">
        <PrimaryButton
          title="Book a call"
          backgroundColor="bg-transparentBackground-500 hover:bg-transparentBackground-600"
          textColor="text-primary"
        />
        <PrimaryButton
          customStyles="absolute right-0 w-10 h-10 px-0 py-0 z-10 bg-opacity-50"
          leftIcon={<BurgerIcon clicked={isModalVisible} />}
          backgroundColor="bg-transparentBackground-500 hover:bg-transparentBackground-600"
          textColor="text-primary"
          onClick={handleMenyClick}
        />
      </div>
    </header>
  )
}

export default Header