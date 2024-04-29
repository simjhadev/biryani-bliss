//import { featuredProducts } from "@/data";
import { ProductType } from "@/app/types/types";
import Image from "next/image";
import AddToCart from "./AddToCart";
//import { useState } from "react";
import CustomError from "./ErrorComponents/CustomError";

const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
        cache: "no-store"
    })


    if (!res.ok) {
        throw new Error("Unable to fetch Featured Product data.");
    }

    return res.json();
}

const Featured = async () => {
    
    
    
    try{
        let featuredProducts: ProductType[]=[];
        featuredProducts = await getData();
        return (
            <div className="w-full min-h-[100vh] grid overflow-x-scroll">
                {/****** Wrapper */}
                <div className="flex w-max self-center">
                    {/***** Single Item */}
                    {featuredProducts.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-around w-screen md:w-[50vw] xl:w-[33vw] p-4 h-[70vh] hover:bg-primaryLite transition-all duration-300">
                            {/************* Image container */}
                            <div className="relative flex-1 w-full">
                                {item.img ?
                                    <Image src={item.img} alt="Product Image" fill className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    />
                                    : null
                                }
                            </div>
    
                            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                                <h1 className="text-xl font-bold uppercase">{item.title}</h1>
                                <p className="p-4 2xl:p-8">{item.desc}</p>
                                <span className="text-xl font-bold">${item.price}</span>
                                <AddToCart className="bg-buttonBg text-white p-2 rounded-md" product={item} />
                            </div>
                        </div>
                    ))}
    
                </div>
            </div>
        );
    }catch(error){
       return(<CustomError errorMsg="Unable to fetch Featured Product data." />)
    }

    
}

export default Featured;