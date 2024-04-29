"use client"

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () =>{
    const { data, status } = useSession();
    const router = useRouter();

    if(status === "loading"){
        return <p>Loading...</p>
    }
    if(status === "authenticated"){
        router.push("/");
    }
    
    //console.log("Data", data);
    //console.log("Status", status);

    return(
        <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
            <div className="h-full md:h-[70vh] md:w-full lg:w-[60%] 2xl:w-1/2 shadow-2xl rounded-md flex flex-col md:flex-row">
            {/**Image Container */}
            <div className="relative h-1/3 w-full md:w-1/2 md:h-full ">
                <Image src="/loginBg.png" alt="Login Page Image" fill className="object-cover"/>
            </div>
            {/**Form Container */}
            <div className="p-10 flex flex-col gap-8 md:w-1/2">
                <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
                <p className="">Log into your account or create a new one using social buttons</p>

                <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
                onClick={()=>signIn("google")}>
                    <Image src="/google.png" alt="" width={20} height={20} className="object-contain" />
                    <span>Sign in with Google</span>
                </button>

                <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
                    <Image src="/facebook.png" alt="" width={20} height={20} className="object-contain" />
                    <span>Sign in with Facebook</span>
                </button>
                <p className="text-sm">Have a problem? <Link href="/" className="underline">Contact Us</Link></p>
            </div>
            </div>
        </div>
    );
}

export default LoginPage;