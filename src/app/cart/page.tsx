"use client"

import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart, clearCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();
  
  useEffect(()=>{
    useCartStore.persist.rehydrate();
    },[])

  const handleCheckout = async() => {
    if(!session){
      router.push("/login");
    }
    else{
      try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`,{
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email,
          }),
        });
        if(res.status === 201){
          clearCart();
          toast.success("Order Placed.");
        }

        
      }catch(err){
        console.log(err);
        clearCart();
        toast.success("Unable to Place Order.");
      }
    }
  }
    
  return (
    <div className="h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] flex flex-col text-red-500 lg:flex-row ">
      {/* Product Container */}
      <div className="h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 p-4 lg:px-20 xl:px-40 flex flex-col justify-center overflow-y-auto ">
        {/* Single Item */}
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4 " key={item.id + item.optionTitle}>
            {item.img &&
            <Image
            src={item.img}
            alt="Cart Product Image"
            width={90}
            height={90}
            />
            }
            <div>
              <h1 className="uppercase text-xl font-bold">{item.title} X {item.quantity}</h1>
              {item.optionTitle &&  item.optionTitle.map((arrItem, index) => 
                  <span key={"O_"+arrItem+index} >{arrItem}<br /></span>
                  )}
            </div>
            <h2 className="font-bold">${item.price}</h2>
            <span className="cursor-pointer" onClick={()=>removeFromCart(item)}>X</span>
          </div>
        ))}
      </div>

      {/**Payment Container */}
      <div className="h-1/2 lg:h-full lg:w-1/3 2xl:w-1/2 p-4 xl:px-20 2xl:text-lg 2xl:gap-6 bg-fuchsia-50 flex flex-col gap-4 justify-center">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button className="bg-buttonBg text-white p-3 rounded-md w-1/2 self-end" onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
