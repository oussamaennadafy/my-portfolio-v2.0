import React, { useEffect } from 'react';

function BurgerIcon({ clicked }: any) {
  return (
    <div className='relative'>
      <div className={`flex flex-col items-center justify- gap-[10px] transition-all ${clicked ? "scale-0" : "scale-100"}`}>
        <span className='w-4 bg-primary h-[2px] transition-all rounded-full'></span>
        <span className='w-4 bg-primary h-[2px] transition-all rounded-full'></span>
      </div>
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 bg-primary h-[2px] transition-all rounded-full ${clicked ? "rotate-45" : "rotate-0"}`}></span>
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 bg-primary h-[2px] transition-all rounded-full ${clicked ? "-rotate-45" : "rotate-"}`}></span>
    </div>
  );
};

export default BurgerIcon;