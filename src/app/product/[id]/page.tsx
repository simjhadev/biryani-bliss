
import { ProductType } from "@/app/types/types";
import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
import Image from "next/image";
export const dynamic = "force-dynamic";
const getData = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
        cache: "no-store"
    })


    if (!res.ok) {
        throw new Error("Unable to fetch Details.");
    }

    return res.json();
}

const SingleProductPage = async ({ params }: { params: { id: string } }) => {

    const singleProduct: ProductType = await getData(params.id)
    console.log(singleProduct);
    return (
        <div className="relative p-4 lg:px-40 xl:px-40 h-screen flex flex-col md:flex-row md:items-center justify-around ">
            <div className="relative w-full h-1/2 md:h-[70%]">
                <Image src={singleProduct.img ? singleProduct.img : ""}
                    sizes="(max-width: 760px) 100vw, 40vw"
                    alt="Product Image"
                    className="object-contain p-4"
                    fill
                    loading="lazy"
                ></Image>
            </div>
            <div className="h-1/2 md:h-[70%] flex flex-col gap-4 md:gap-6 xl:gap-8 md:justify-center">
                <h1 className="text-3xl xl:text-4xl font-bold uppercase">{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price product={singleProduct} />
            </div>
            <DeleteButton id={params.id} />
        </div>
    );
}

export default SingleProductPage;