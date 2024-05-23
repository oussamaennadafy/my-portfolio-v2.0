"use client"

import { Container } from '@/components/Container';
import { useToast } from '@/store';
import { Toast } from 'flowbite-react'

function Wrapper({ Icon, message, background, text }) {
  const hideToast = useToast((state) => state.hideToast);
  
  return (
    <div className="flex flex-col items-center gap-4 fixed w-full top-5 z-50 transition-all">
      <Container className='w-full mx-auto lg:!px-8 xl:!px-0'>
        <Toast duration={1000} className='items-center p-3 shadow-md gap-2 bg-gray-600/40 backdrop-blur-lg min-w-[90%] sm:min-w-96 lg:mr-0 mx-auto rounded-lg'>
          <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${background} ${text}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal text-gray-950 dark:text-gray-100">{message}</div>
          <Toast.Toggle onClick={() => hideToast()} className='items-center justify-center bg-transparent fill-red-700' />
        </Toast>
      </Container>
    </div>
  );
};

export default Wrapper