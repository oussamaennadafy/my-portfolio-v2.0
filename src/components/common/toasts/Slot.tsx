"use client"

import { useStore } from '@/store';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow'

function Slot() {
  const { toast, hideToast } = useStore(useShallow((state) => ({ toast: state.toast, hideToast: state.hideToast })));
  
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      hideToast();
    }, 6000)

    return () => clearTimeout(timeoutID);
  }, [hideToast, toast]);

  return toast;
}

export default Slot