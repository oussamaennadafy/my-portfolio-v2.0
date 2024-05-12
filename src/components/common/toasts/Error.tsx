import React from 'react';
import { HiX } from 'react-icons/hi'
import { ToastWrapper } from '.';

function Error({ message }: { message: string }) {
  return (
    <ToastWrapper Icon={HiX} background="bg-red-100" text="text-red-500" message={message} />
  )
}

export default Error