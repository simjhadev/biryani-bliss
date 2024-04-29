import CartIcon from "./CartIcon";
import Menu from "./Menu";
import Link from 'next/link';
import Image from "next/image";
import UserLinks from "./UserLinks"
import { barlow_condensed, montserrat} from "@/utils/fonts";

const Navbar = () => {
    const user = false;

    return (
        <div className={`h-12 text-primaryText flex item-center justify-between border-b-2 border-b-secondaryLite  font-sans uppercase md:h-24 text-xl tracking-wide`}>
            {/********** LEFT Links **********/}
            <div className="hidden md:flex flex-1 items-center gap-4">
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/#contactus">Contact</Link>
            </div>

            <div className={`text-2xl font-mont font-bold md:flex items-center justify-center flex-1 md:text-center`}>
                <Link href="/">Biryani Bliss</Link>
            </div>

            <div className="md:hidden">
                <Menu />
            </div>

            {/********** RIGHT Links **********/}
            <div className="hidden md:flex flex-1 items-center justify-end gap-4">
                
                <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-buttonBg px-1 rounded-md">
                    <Image src="/phone.png" alt="Phone Icon" width={20} height={20}/>
                    <span className="text-white">123 456789</span>
                </div>
                <UserLinks />
                <CartIcon />
            </div>
        </div>
    );
};

export default Navbar;