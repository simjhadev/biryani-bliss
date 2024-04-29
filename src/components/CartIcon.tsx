"use client"

import Link from "next/link";
//import Image from "next/image";
import { useCartStore } from "@/utils/store";
import { useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";

const CartIcon = () =>{
    const { totalItems } = useCartStore();
    
    useEffect(()=>{
        useCartStore.persist.rehydrate();
    },[])

    return(
        <Link href="/cart" className="flex items-center gap-2">
            <FaCartShopping />
            <span>Cart ({totalItems})</span>
        </Link>
    );
};

export default CartIcon;