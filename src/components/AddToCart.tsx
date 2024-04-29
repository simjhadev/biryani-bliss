"use client"

import { useCartStore } from "@/utils/store";
import { toast } from "react-toastify";
import { ProductType } from "@/app/types/types";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingComponents/LoadingSpinner";

const AddToCart = ({product, className}: {product: ProductType, className : string}) => {
    const { addToCart } = useCartStore();

    useEffect(()=>{
        useCartStore.persist.rehydrate();
    },[])

    const handleCart = () => {
        //console.log("Handle Cart");
        addToCart(
        {
            id: product.id,
            title: product.title,
            img: product.img,
            price: parseFloat(product.price+""),
            quantity: 1,
        })
        toast.success("The product added to the cart.");
    }
    
    return(
            <button className={`${className}`} onClick={handleCart}>Add to Cart</button> 
    );
}

export default AddToCart;