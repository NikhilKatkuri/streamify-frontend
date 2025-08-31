// src/context/ToastContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Toast = {
  id: number;
  message: string;
  type?: 'success' | 'error' | 'info';
};

type ToastContextType = {
  toasts: Toast[];
  addToast: (_message: string, _type?: Toast['type']) => void;
  removeToast: (_id: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: Toast['type'] = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000); // auto-remove after 3s
  };

  const removeToast = (_id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== _id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}
