"use client";

import { TailSpin } from "react-loader-spinner";
type spinnerType = {
    loading: boolean,
}

const LoadingSpinner = ({loading}:spinnerType) => {
    
    return (
        <TailSpin
            visible={loading}
            height="20"
            width="20"
            color="#ffffff"
            ariaLabel="tail-spin-loading"
            radius="2"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}

export default LoadingSpinner;