import { ActionTypes, CartType, CartItemType } from "@/app/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
}

const areArraysEqual = (arr1: string[]| undefined, arr2: string[]| undefined) => {
    //console.log("Arraysssssss", !arr1, arr2);
    if(arr1 === undefined  && arr2 === undefined){
        return true;
    }

    if(arr1 && arr2){
        let tempArr1 = arr1, tempArr2 = arr2;
    tempArr1.sort();
    tempArr2.sort();
    
    return tempArr1.length === tempArr2.length && tempArr1.every((element, index) => element === tempArr2[index]);
    }
    return false;
    
}

const checkProductWithAddonInCart = (products: CartItemType[], item: CartItemType) => {
    for(let i = 0; i < products.length ; i++){
        const productInState = (products[i].id === item.id);
        //console.log(i,"Product State",productInState);
        const addOnOptInProduct =  productInState ? 
                                    (
                                        areArraysEqual(products[i].optionTitle,item.optionTitle)
                                    )
                                    : false;
        //console.log("AddOnState", addOnOptInProduct)
        if(productInState && addOnOptInProduct)
        return products[i];
    }
}

export const useCartStore = create(persist<CartType & ActionTypes>((set,get) => ({
    products:INITIAL_STATE.products,
    totalItems:INITIAL_STATE.totalItems,
    totalPrice:INITIAL_STATE.totalPrice,
    addToCart(item){
        const products = get().products;
        const productInState = checkProductWithAddonInCart(products, item)
        console.log("Product In State", productInState);

        if(productInState){
            console.log("Products", products);
            const updatedProducts = products.map(product => (product.id === productInState.id && areArraysEqual(product.optionTitle,productInState.optionTitle)) ? {
                ...item,
                quantity:item.quantity + product.quantity,
                price: parseFloat((item.price + product.price).toFixed(2)),
            } : product);
            console.log("Update Product",updatedProducts);
            
            set((state)=>({
                products: updatedProducts,
                totalItems: state.totalItems + item.quantity,
                totalPrice: parseFloat((state.totalPrice + item.price).toFixed(2)),
            }))


        }else{
            set((state)=>({
                products: [...state.products, item],
                totalItems: state.totalItems + item.quantity,
                totalPrice: parseFloat((state.totalPrice + item.price).toFixed(2)),
            }))
        }
    },
    removeFromCart(item){
        //console.log("Remove Itemssssssssss",get().totalPrice,"-",item.price,(get().totalPrice - item.price).toFixed(2));
        set((state)=>({
            products: state.products.filter(product=>!(product.id === item.id && areArraysEqual(product.optionTitle,item.optionTitle))),
            totalItems: state.totalItems - item.quantity,
            totalPrice: parseFloat((state.totalPrice - item.price).toFixed(2)),
        }))
    },
    clearCart(){
        set(()=>(INITIAL_STATE));
    },
}),{name:"cart", skipHydration: true}))