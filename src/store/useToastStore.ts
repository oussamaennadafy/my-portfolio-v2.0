import { create } from 'zustand'

interface useToastType {
  show: boolean,
  type: "success" | "error" | "info" | null,
  message: string,
  showToast: (type: "success" | "error" | "info", message: string) => void,
  hideToast: () => void,
}

export const useToastStore = create<useToastType>((set) => ({
  show: false,
  type: null,
  message: "",
  showToast: (type: "success" | "error" | "info", message: string) => {
    set({
      show: true,
      type,
      message,
    });
  },
  hideToast: () => {
    set({ show: false });
  },
}));