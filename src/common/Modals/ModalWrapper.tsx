"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

function ModalWrapper({ children, isModalVisible }: { children: React.ReactNode, isModalVisible: string | undefined }) {
  const router = useRouter();
  
  return (
    <div className={`fixed inset-0 flex items-start justify-center transition-all ${isModalVisible ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}`}>
      <div
        onClick={() => router.back()}
        className="absolute inset-0 bg-primary opacity-50 cursor-pointer"
      ></div>
        {
          children
        }
    </div>
  );
}

export default ModalWrapper;
