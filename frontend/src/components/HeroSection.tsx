import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardItem {
    title: string;
    imgUrl: string;
}

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const cardItems: CardItem[] = [
        {
            title: "Quell B20",
            imgUrl: "QuellB20.png"
        },
        {
            title: "Beauty Product",
            imgUrl: "beauty-product.png"
        },
        {
            title: "M-Drink",
            imgUrl: "M-Drink.png"
        },
        {
            title: "M-Drink",
            imgUrl: "SunsCream2.png"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex < cardItems.length - 1 ? prevIndex + 1 : 0
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [cardItems.length]);

    return (
        <section className="h-screen w-full text-white px-6 md:px-20 overflow-hidden bg-background flex mt-25 lg:pt-0 lg:flex-row items-center justify-center">
            <div
                className="relative font-poppins w-full h-full max-h-screen overflow-hidden rounded-lg flex items-center justify-between">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        initial={{x: "5%", opacity: 1}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: "-5%", opacity: 0}}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                        className="w-full rounded-lg h-full object-cover pointer-events-none absolute left-0 top-0"
                        src={`/${cardItems[currentIndex].imgUrl}`}
                        alt=""
                    />
                </AnimatePresence>


                <div className="w-1/2 z-10 bg-white/0 h-full flex items-center justify-center"></div>
            </div>
        </section>
    );
};

export default HeroSection;
