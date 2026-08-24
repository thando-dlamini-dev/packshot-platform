import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

interface CardItem {
    title: string;
    imgUrl: string;
}

const HeroSection = () => {
    const [ currentIndex, setCurrentIndex ] = useState<number>(0);
    const cardItems: CardItem[] = [
        {
            title: "",
            imgUrl: "QuellB20.png"
        },{
            title: "",
            imgUrl: "beauty-product.png"
        },{
            title: "",
            imgUrl: "M-Drink.png"
        },{
            title: "",
            imgUrl: "M-Drink2.png"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex < cardItems.length - 1 ? prevIndex + 1 : 0));
        }, 2000);

        return () => {
            clearInterval(interval)
        };
    }, [currentIndex])

    return (
        <section className="h-screen text-white px-20 overflow-clip bg-black flex mt-25 lg:pt-0 lg:flex-row items-center justify-center">
            <div className="w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
                <motion.img className="w-full " src={`/${cardItems[currentIndex].imgUrl}`} alt=""/>
            </div>
        </section>
    )
}

export default HeroSection;