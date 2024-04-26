"use client"

import React, { useEffect, useState } from 'react'
import ModalWrapper from './../ModalWrapper'
import NavButton from './NavButton';

function NavModal({ isModalVisible }: { isModalVisible: string | undefined }) {
  return (
    <ModalWrapper isModalVisible={isModalVisible}>
      <button className='absolute'>
      </button>
      <div className={`relative shadow-lg shadow-[#ffffff66] bg-white rounded-2xl p-5 flex flex-col top-20 w-full mx-6 transition-all ${isModalVisible ? "scale-100" : "scale-95"}`}>
        <NavButton title={"Home"} />
        <NavButton title={"About"} />
        <NavButton title={"Work"} />
        <NavButton title={"Blog"} />
        <NavButton title={"Contact"} />
      </div>
    </ModalWrapper>
  )
}

export default NavModal;