import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// GET Single Product
export const GET = async (
    req : NextRequest,
    { params } : {params : {id : string}}
) => {
    const { id } = params;

    try{
        const product = await prisma.product.findUnique({
            where: {
                id : id
            },
        });
        //throw new Error("Unable to fetch Featured product details.");
        return new NextResponse(
            JSON.stringify(product),
            { status:200 }
        );

    }catch(err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message : "Something went wrong!"})
        ,{ status : 500 })
    }
}

//Delete Single Product.

export const DELETE = async (
    req : NextRequest,
    { params } : {params : {id : string}}
) => {
    const { id } = params;
    const session = await getAuthSession();
    console.log(session);
    if(session?.user.isAdmin){
        try{
            const product = await prisma.product.delete({
                where: {
                    id : id
                },
            });
            
            return new NextResponse(
                JSON.stringify("Product has been deleted!"),
                { status: 200 }
            );
    
        }catch(err){
            console.log(err);
            return new NextResponse(
                JSON.stringify({message : "Something went wrong!"})
            ,{ status : 500 });
        }
    }
    return new NextResponse(
        JSON.stringify({message : "You are not allowed."})
    ,{ status : 403 });
    
}