import Link from "next/link";

const Footer = () => {
    return(
        <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 bg-gray-50 text-primary flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">Biryani Bliss</Link>
            <p className="text-primary" >ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;