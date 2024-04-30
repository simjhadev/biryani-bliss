//import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/app/types/types";
import AddToCart from "@/components/AddToCart";
export const dynamic = "force-dynamic";

type Props = {
    params: {
        category: string
    }
}
const getData = async (category: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?cat=${category}`, {
        cache: "no-store"
    })


    if (!res.ok) {
        throw new Error("Unable to fetch Menu Category list. ");
    }

    return res.json();
}

const Category = async ({ params }: Props) => {
    const products: ProductType[] = await getData(params.category);

    return (
        <div className="flex flex-wrap text-red-500 min-h-[100vh]">
            {products.map((item) => (
                <Link href={`/product/${item.id}`}
                    key={item.id}
                    className="w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-b-2 p-4 flex flex-col justify-between group even:bg-gray-100"
                >
                    {item.img &&
                        <div className="relative h-[70%]">
                            <Image src={item.img} alt="" fill className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority={false}
                                loading="lazy"
                            />
                        </div>
                    }
                    <div className="flex items-center justify-between font-bold">
                        <h1 className="text-xl uppercase p-2">{item.title}</h1>
                        <h2 className="text-xl group-hover:hidden">${item.price}</h2>
                        <AddToCart className="hidden group-hover:flex gap-2 uppercase bg-buttonBg text-white p-2 rounded-md" product={item} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Category;