"use client"

import { useToast } from '@/store';
import { useEffect } from 'react';
import { ToastError, ToastInfo, ToastSuccess } from '.';

function Slot() {
  const { show, type, message, hideToast } = useToast();
  
  useEffect(() => {
    if(!show) return;

    const timeoutID = setTimeout(() => {
      hideToast();
    }, 6000)
    
    return () => clearTimeout(timeoutID);
  }, [hideToast, show]);
  
  if(!show) return null;

  switch (type) {
    case "success":
      return <ToastSuccess message={message} />;

    case "error":
      return <ToastError message={message} />;

    case "info":
      return <ToastInfo message={message} />;

    default:
      throw new Error("invalid toast type!");
  }
}

export default Slot