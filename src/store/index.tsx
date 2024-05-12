import { ToastError, ToastSuccess, ToastInfo } from '@/components/common/toasts';
import { ReactNode } from 'react';
import { create } from 'zustand'

type storeType = {
  toast: null | ReactNode,
  showToast: (type: "success" | "error" | "info", message: string) => void;
  hideToast: () => void,
}

export const useStore = create<storeType>((set) => ({
  toast: null,
  showToast: (type: "success" | "error" | "info", message: string) => {
    switch (type) {
      case "success":
        return set({ toast: <ToastSuccess message={message} /> });

      case "error":
        return set({ toast: <ToastError message={message} /> });

      case "info":
        return set({ toast: <ToastInfo message={message} /> });

      default:
        throw new Error("invalid toast type!");
    }
  },
  hideToast: () => {
    set({ toast: null });
  },
}));