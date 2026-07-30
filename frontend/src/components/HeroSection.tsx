import { useState } from "react";
import { motion } from "framer-motion"
import { FaBottleWater } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const [trigger, setTrigger] = useState<boolean>(false)
    const [isHovering , setIsHovering] = useState<boolean>(false)

    setTimeout(() => {
        setTrigger(true);
    },)


    return (
        <section className="h-screen bg-background flex flex-col-reverse pt-20 lg:pt-0 lg:flex-row items-center justify-between">
                <motion.div
                    className="text-black lg:px-40 w-full lg:w-1/3 h-full flex flex-col items-center lg:items-start justify-center gap-10">
                    <motion.h1 initial={{x: -10, opacity:0}} animate={{x:0, opacity:1}} transition={{duration: 0.5, ease: "easeInOut"}} className="font-bold text-4xl">Packshot Studio</motion.h1>
                    {/*<h1 className={`${trigger ? "text-md" : "text-sm"} transition-all duration-1000 ease-in-out`}></h1>*/}
                    <p className={`${trigger ? "text-md" : "text-sm"} transition-all duration-2500 ease-in-out`}>Built to keep your drinks fresh for years.</p>
                    <Link to="/shop" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="px-8 py-3 bg-black hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg shadow-neutral-500 rounded-full text-white flex gap-3 items-center">Shop Now
                        <FaBottleWater className={`text-2xl transition-all duration-300 ease-in-out ${isHovering && "rotate-90"}`}/>
                    </Link>

                </motion.div>
                <motion.div className="w-full lg:w-2/3 lg:mr-0 h-full flex items-center justify-center gap-10">
                    <motion.img className="h-full" src="/Bottles2.png" alt=""/>
                </motion.div>
        </section>
    )
}

export default HeroSection;