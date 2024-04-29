
import { MenuType } from "../types/types";
import CategoryButton from "@/components/CategoryButton";

const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`,{
        cache:"no-store"
    })

    
    if(!res.ok){
        throw new Error("Unable to fetch Menu Category data.");
    }

    return res.json();
}


const Menu = async () => {
    const menu : MenuType = await getData();

    return(
        <div className="p-4 lg:px-20 xl:px-40 lg:h-[calc(100vh-9rem)] flex gap-10 flex-col lg:flex-row items-center">
        
    
           {menu.map((category)=>(
                <div 
                style={{ backgroundImage:`url(${category.img})`}}
                className="w-[100vw] h-[50vw] md:w-[40vw] md:h-[40vw] bg-cover lg:w-full lg:h-[50vh] flex rounded-lg justify-center border border-primaryLite bg-center" 
                key={category.id}>
                <CategoryButton category={category} />
                </div>
           ))} 
        </div>
        
    );
};


/*
return(
        <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh - 6rem)] md:h-[calc(100vh - 9rem)] flex flex-col md:flex-row items-center">
           {menu.map((category)=>(
                <Link href={`/menu/${category.slug}`} 
                key={category.id} 
                style={{ backgroundImage:`url(${category.img})`}}
                className="w-full h-1/3 bg-cover p-8 md:h-1/2 ">
                    <div className={`text-${category.color} w-[100%] bg-black/50`}>
                        <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
                        <p className="text-sm my-8">{category.desc}</p>
                        <button className={`hidden 2xl:block px-4 py-2 rounded-md bg-${category.color} text-${category.color === "black"? "white" : "red-500"}`}>Explore</button>
                    </div>
                </Link>
           ))} 
        </div>
    );
*/

//text-${category.color === "black" ? "white" : "red"}
export default Menu;

