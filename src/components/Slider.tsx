"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./LoadingComponents/LoadingSpinner";

const data = [
    {
        id: 1,
        title: "When spices start speaking. Enjoy the food we love.",
        image: "/slide1.jpg",
    },
    {
        id: 2,
        title: "Biryani Love, Served Fresh",
        image: "/slide2.png",
    },
    {
        id: 3,
        title: "Elevate Your Biryani Experience",
        image: "/slide3.jpg",
    }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const orderBtnClickHandler = () => {
        setLoading(true);
        router.push("/menu");
    }

    /* useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        },2000)

        return () => clearInterval(interval);
    },[]); */

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
            <div className="flex flex-1 items-center justify-center flex-col gap-8 text-secondaryText font-bold bg-primaryLite">
                <h1 className="text-4xl md:text-5xl xl:text-6xl text-center uppercase p-4 md:p-10">
                    {data[currentSlide].title}
                </h1>
                <button className="bg-buttonBg text-white py-4 px-8" onClick={orderBtnClickHandler}>
                    <div className="flex gap-2">
                        <span>Order Now</span>
                        <LoadingSpinner loading={loading} />
                    
                    </div>
                </button>
            </div>
            <div className="flex-1 relative">
                <Image src={data[currentSlide].image} alt="Slider Image" fill className='object-cover'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    priority={false}
                    loading="lazy"
                />
            </div>
        </div>

    );
}

export default Slider;