"use client"

import { useEffect } from 'react';
 
export default function PageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]); 
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <h2 className="text-center">{error.message}</h2>
      <button
        className="mt-4 rounded-md bg-buttonBg px-4 py-2 text-sm text-white"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}