"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";
import { signOut, useSession } from "next-auth/react";

const links = [
    { id: 1, title: "Homepage", url:"/"},
    { id: 2, title: "Menu", url:"/menu"},
    { id: 3, title: "Contact", url:"/#contactus"},
];


const Menu = () => {
    const [open, setOpen] = useState(false);
    //const user = false;
    const {status} = useSession();

    return(
        <div>
        {!open ? (
            <Image src="/open.png"
            alt="Hamburger"
            width={20}
            height={20}
            onClick={()=>setOpen(true)}
        />)
        :(
            <Image src="/close.png"
            alt="Hamburger"
            width={20}
            height={20}
            onClick={()=>setOpen(false)}
        />
        )}

        {open && 
        <div className="bg-buttonBg text-white absolute left-0 top-24  w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
            {links.map((item)=>(
                <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
            ))}
            {status === "authenticated"?
                <>
                <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>
                <div className="cursor-pointer" onClick={()=>{signOut();setOpen(false);}}>Logout</div>
                </>
                
                :
                <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
            }
            <CartIcon />
        </div>
        }
    </div>
    );
    
};

export default Menu;