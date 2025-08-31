'use client';

import { useToast } from '@/context/ToastContext';
import { useEffect, useState } from 'react';

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();
  const [visibleToToasts, setVisibleToasts] = useState<number[]>([]);

  useEffect(() => {
    setVisibleToasts(toasts.map(t => t.id));
  }, [toasts, removeToast]);

  return (
    <div className="fixed top-4 right-4 z-50 flex w-full flex-col gap-4 sm:w-96">
      {toasts.map(toast => (
        <div
          key={toast.id}
          onClick={() => removeToast(toast.id)}
          role="alert"
          aria-live="assertive"
          className={`relative flex transform cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-r p-5 text-white transition-all duration-500 ease-in-out ${visibleToToasts.includes(toast.id) ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${
            toast.type === 'success'
              ? 'border-teal-400/50 from-teal-500/30 via-teal-600/50 to-teal-700/30 hover:shadow-teal-500/30'
              : toast.type === 'error'
                ? 'border-red-400/50 from-red-500/30 via-red-600/50 to-red-700/30 hover:shadow-red-500/30'
                : 'border-blue-400/50 from-blue-500/30 via-blue-600/50 to-blue-700/30 hover:shadow-blue-500/30'
          } border shadow-lg before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:opacity-20 before:transition-opacity before:duration-300 before:content-[''] hover:scale-105 hover:shadow-xl before:hover:opacity-40 ${
            toast.type === 'success'
              ? 'before:from-teal-400/20 before:to-teal-600/20'
              : toast.type === 'error'
                ? 'before:from-red-400/20 before:to-red-600/20'
                : 'before:from-blue-400/20 before:to-blue-600/20'
          } `}
        >
          <span className="flex-1 text-sm font-medium tracking-wide">
            {toast.message}
          </span>
          <button
            className="rounded-full text-white/70 transition-colors duration-200 hover:text-white focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
            aria-label="Close toast"
            onClick={e => {
              e.stopPropagation();
              removeToast(toast.id);
            }}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
