import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {BiMenu} from "react-icons/bi";
import {LuCircleX} from "react-icons/lu";

const Navbar = () => {
    const [ navClosed, setNavClosed ] = useState<boolean>(true);
    const [expanded, setExpanded] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() =>
        {
            setExpanded(true);
        }, 2000)
        return () => {
            clearInterval(interval)
        };
    })

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
            name: "Services",
            url: "/services",
        },{
            delay: 0.5,
            name: "Contact",
            url: "/contact",
        },
        {
            delay: 0.5,
            name: "Blog",
            url: "/blog",
        }

    ]

    const [ hoveredLink, setHoveredLink ] = useState<string>("")
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Sets true if scrolled down, false if at the very top
            setIsScrolled(window.scrollY > 200);
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`fixed w-screen font-poppins z-50 lg:px-20 top-0 left-0 p-2 lg:h-22 ${navClosed ? "h-22" : "h-screen"} flex ${!navClosed ? "flex-col bg-background/100 backdrop-blur-md" : "flex-row bg-background"} items-center justify-between transition-all duration-300 ease-in-out`}>
            <div className="w-fit h-fit flex items-center justify-start gap-10">
                <Link onClick={() => setNavClosed(true)} to="/" className={`w-1/4 lg:w-fit ${!navClosed && "hidden"} lg:h-4/5 lg:flex justify-center gap-1 text-2xl text-text items-center`}>
                    <img className="w-6 mr-1" src="/VectorRay-Logo1.png" alt=""/>
                    <h1 className="font-bold flex items-center justify-center">V<h1 className={`${expanded}`}>ector</h1>Ray.</h1>
                </Link>
                <div className="w-fit h-fit overflow-hidden">
                    <div
                        className={`${navClosed ? "hidden" : "flex"} ${!isScrolled ? "w-100 opacity-100" : "w-100 -translate-x-full opacity-100"} overflow-hidden transition-all duration-500 ease-in-out  lg:flex h-full flex-col lg:flex-row items-center justify-center gap-5 text-text`}>
                        <div className="w-[1px] mr-5 h-8 bg-neutral-600"></div>
                        {links.map((link) =>
                            <div onMouseEnter={() => setHoveredLink(link.name)} onMouseLeave={() => setHoveredLink("")} key={link.name} className="w-fit pt-2 h-fit flex flex-col items-start justify-end gap-[1px] overflow-hidden">
                                <Link to={link.url} className="">
                                    {link.name}
                                </Link>
                                <div className={`w-full ${hoveredLink === link.name ? "translate-x-0" : "-translate-x-100"} transition-all duration-300 ease-in-out h-[1px] bg-theme `}>

                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <BiMenu onClick={() => setNavClosed(!navClosed)} className={`lg:hidden ${!navClosed && "hidden"} cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out text-text text-4xl absolute right-4 top-5`}/>
            <LuCircleX onClick={() => setNavClosed(!navClosed)} className={`lg:hidden ${navClosed && "hidden"} cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out text-text text-4xl absolute right-4 top-5`}/>

            <div className={`lg:w-fit h-full ${navClosed && "hidden"} lg:flex flex items-center justify-start lg:justify-end gap-5 text-text`}>
                <h1 className="cursor-pointer hover:scale-120 transition duration-200 ease-in-out">
                    Login
                </h1>
                <h1 className="cursor-pointer bg-text hover:scale-120 transition duration-200 ease-in-out text-background px-4 py-1 rounded-full">
                    SignUp
                </h1>
            </div>
        </section>
    )
}

export default Navbar;