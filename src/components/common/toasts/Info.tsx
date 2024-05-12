import React from 'react'
import { HiExclamation } from 'react-icons/hi'
import { ToastWrapper } from '.'

function Info({ message }: { message: string }) {
  return (
    <ToastWrapper Icon={HiExclamation} background="bg-orange-100" text="text-orange-500" message={message} />
  )
}

export default Info