import React from 'react'
import { HiCheck } from 'react-icons/hi'
import { ToastWrapper } from '.'

function Success({ message }: { message: string }) {
  return (
    <ToastWrapper Icon={HiCheck} background="bg-green-100" text="text-green-500" message={message} />
  )
}

export default Success