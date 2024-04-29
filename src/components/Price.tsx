"use client"

import { ProductType } from "@/app/types/types";
import { useCartStore } from "@/utils/store";
import { ReactEventHandler, useEffect, useState } from "react";
import { toast } from "react-toastify";


const Price = ({product}: {product : ProductType}) => {
    const [total, setTotal] = useState(parseFloat(product.price+""));
    const [quantity, setQuantity] = useState(1);
    const [selectedAddon, setSelectedAddon] = useState<number[]>([]);

    const { addToCart } = useCartStore();

    useEffect(()=>{
        useCartStore.persist.rehydrate();
    },[])

    useEffect(() => {
        //console.log(selectedAddon);
        const productPrice = parseFloat(product.price+"");
        const addOnTPrice = (product.options?.length && selectedAddon.length) ? (selectedAddon.reduce((total, item) => (total  + product.options![item].additionalPrice), 0)): 0;
        const tP = (quantity * (productPrice + addOnTPrice));
        setTotal(parseFloat(tP.toFixed(2)));
        //console.log("Total", quantity * (productPrice + addOnTPrice));
    }, [quantity, selectedAddon, product]);


    const addOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        
        if(e.target.checked){
            setSelectedAddon(prev => [index,...prev])
        }
        else{
            setSelectedAddon(selectedAddon.filter((item)=> item != index))
        }
    }

    const handleCart = () => {
        console.log("Handle Cart");
        addToCart(
        {
            id: product.id,
            title: product.title,
            img: product.img,
            price: total,
            ...((product.options?.length && selectedAddon.length) && {optionTitle: selectedAddon.map((item)=> product.options![item].title)}),
            quantity: quantity,
        })
        toast.success("The product added to the cart.");
    }
   //...(product.options?.length && {optionTitle: product.options[selected].title}), 
    return(
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">${total}</h2>
            <div className="flex flex-col gap-4 ">
                {product.options?.length && product.options?.map((option, index)=>(
                    <div key={option.title+index} className="flex justify-between w-full gap-4 ring-1 p-2 ring-gray-200 rounded-md">
                        <div className="flex gap-2">
                        <input type="checkbox" name={option.title+index} value={option.additionalPrice} onChange={(e) => addOnChangeHandler(e , index)} />
                        <label htmlFor={option.title+index}>{option.title}</label>
                        </div>
                        <div>{option.additionalPrice}$</div> 
                    </div>
                ))}
                
            </div>
        
            <div className="flex justify-between items-center">
                <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                    <span>Quantity</span>

                    <div className="flex gap-4 items-center">
                        <button onClick={()=>setQuantity(prev=>(prev > 1 ? prev-1 : 1))}>{"<"}</button>
                        <span>{quantity}</span>
                        <button onClick={()=>setQuantity(prev=>(prev < 9 ? prev+1 : prev))}>{">"}</button>
                    </div>
                </div>

                
                    <button className="uppercase w-56 bg-buttonBg text-white p-3 ring-1 ring-red-500"
                    onClick={handleCart}
                    >Add To Cart</button>
                
            </div>
        </div>
       
    );
}

export default Price;