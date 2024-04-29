"use client"

import Link from "next/link";
import { CategoryType } from "@/app/types/types";
import LoadingSpinner from "./LoadingComponents/LoadingSpinner";
import { useState } from "react";

const CategoryButton = ({ category }: { category: CategoryType }) => {
    const [loading, setLoading] = useState(false);

    return (
        <Link href={`/menu/${category.slug}`} className="self-center shadow-md" onClick={()=>setLoading(true)}>
           
            <div className={`text-white bg-black/50 hover:bg-buttonBg/80 w-[300px] h-[100px] flex gap-2 justify-center rounded-lg`}>
                <h1 className="uppercase font-bold text-2xl text-center self-center">{category.title}</h1>
                <div className="self-center">
                <LoadingSpinner loading={loading} />
                </div>
            </div>  
        </Link>
    )
}


export default CategoryButton;
