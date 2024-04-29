import { prisma } from "@/utils/connect";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req : NextRequest) => {
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany({
        where: {
            ...(cat ? { catSlug: cat } : { isFeatured: true }),
        }
    });
    //throw new Error("Unable to fetch Featured product details.");

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

export const POST = async (req : NextRequest) => {
  try {
    const body = await req.json()
    console.log(body);
    const product = await prisma.product.create({
      data: body,
    })

    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
}; 
