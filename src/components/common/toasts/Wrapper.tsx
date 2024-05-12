"use client"

import { useToastStore } from '@/store';
import { Toast } from 'flowbite-react'

function Wrapper({ Icon, message, background, text }) {
  const hideToast = useToastStore((state) =>  state.hideToast);
  
  return (
    <div className="flex flex-col items-center gap-4 fixed top-24 right-5 z-50 transition-all">
      <Toast duration={1000} className='items-center p-3 shadow-md gap-2'>
        <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${background} ${text}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{ message }</div>
        <Toast.Toggle onClick={() => hideToast()} className='items-center justify-center'/>
      </Toast>
    </div>
  );
};

export default Wrapper