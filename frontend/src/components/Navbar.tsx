import {FaShoppingCart, FaUser, FaHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState} from "react";
import {BiMenu} from "react-icons/bi";
import {LuCircleX} from "react-icons/lu";

const Navbar = () => {
    const [ navClosed, setNavClosed ] = useState<boolean>(true);

    interface Link {
        delay: number,
        name: string,
        url: string
    }

    const links: Link[] = [
        {
            delay: 0.2,
            name: "Our Work",
            url: "/our-work",
        },
        {
            delay: 0.3,
            name: "",
            url: "/our-work",
        },
        {
            delay: 0.4,
            name: "About",
            url: "/about",
        },
        {
            delay: 0.5,
            name: "Contact",
            url: "/contact",
        }

    ]

    return (
        <section className={`fixed z-50 top-0 left-0 w-full p-2 lg:h-22 ${navClosed ? "h-22" : "h-screen"} flex ${!navClosed ? "flex-col bg-black/100 backdrop-blur-md" : "flex-row bg-black"} items-center justify-between transition-all duration-300 ease-in-out`}>
            <div
                className={`lg:w-100 ${navClosed ? "hidden" : "flex"} lg:flex h-full pl-10 flex-col lg:flex-row items-center justify-start gap-5 text-white`}>
                {links.map((link) => <Link to={link.url} className="" key={link.name}>{link.name}</Link>)}
            </div>
            <Link onClick={() => setNavClosed(true)} to="/" className={`w-1/4 lg:w-fit ${!navClosed && "hidden"} lg:h-4/5 lg:flex justify-center gap-1 text-2xl text-white`}>
                <img src="/img_1.png" className="h-full relative" alt=""/>
            </Link>

            <BiMenu onClick={() => setNavClosed(!navClosed)} className={`lg:hidden ${!navClosed && "hidden"} cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out text-white text-4xl absolute right-4 top-5`}/>
            <LuCircleX onClick={() => setNavClosed(!navClosed)} className={`lg:hidden ${navClosed && "hidden"} cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out text-white text-4xl absolute right-4 top-5`}/>

            <div className={`lg:w-100 h-full ${navClosed && "hidden"} lg:flex pr-10 flex items-center justify-start gap-5 text-white`}>
                <FaUser className="cursor-pointer hover:scale-120 transition duration-200 ease-in-out"/>
                <FaHeart className="cursor-pointer hover:scale-120 transition duration-200 ease-in-out"/>
                <FaShoppingCart className="cursor-pointer hover:scale-120 transition duration-200 ease-in-out"/>
            </div>
        </section>
    )
}

export default Navbar;