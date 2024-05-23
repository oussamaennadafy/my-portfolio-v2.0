import React from 'react';
import { HiXCircle } from 'react-icons/hi2'
import { ToastWrapper } from '.';

function Error({ message }: { message: string }) {
  return (
    <ToastWrapper Icon={HiXCircle} background="bg-red-100" text="text-red-500" message={message} />
  )
}

export default Error