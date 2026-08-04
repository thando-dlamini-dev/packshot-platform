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
            imgUrl: "eee.webp"
        },{
            title: "",
            imgUrl: "66e0a5c1f9818ea103e21a65_09-Beech-Wood-RED-NCS-S-2070-Y90R_02.webp"
        },{
            title: "",
            imgUrl: "2510.webp"
        },{
            title: "",
            imgUrl: "andre-fialho-cremes.webp"
        },{
            title: "",
            imgUrl: "dZKAt.jpg",
        },{
            title: "",
            imgUrl: "Quell10.png"
        },
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
        <section className="h-screen px-20 overflow-clip bg-black flex mt-25 lg:pt-0 lg:flex-row items-center justify-center">
            <div className="w-full h-full overflow-hidden rounded-lg">
                <motion.img className="w-full " src={`/${cardItems[cardItems.length-1].imgUrl}`} alt=""/>
            </div>
        </section>
    )
}

export default HeroSection;