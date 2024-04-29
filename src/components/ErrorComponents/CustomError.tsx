"use client"

import { useEffect } from 'react';

const CustomError = ({errorMsg}:{errorMsg : string}) => {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(errorMsg);
      }, [errorMsg]);

    return(
        <div className="flex h-[40vh] flex-col items-center justify-center">
        <h2 className="text-center">Something went wrong!</h2>
        <h2 className="text-center">{errorMsg}</h2>
        </div>
  
    );
}

export default CustomError;