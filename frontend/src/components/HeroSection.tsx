import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

interface CardItem {
    title: string;
    imgUrl: string;
}

const Carousel = () => {
    const cardItems: CardItem[] = [
        {
            title: "",
            imgUrl: "37388f203473059.Y3JvcCwxMjE5LDk1Myw4Nyw0NDY.jpg"
        },{
            title: "",
            imgUrl: "2510.webp"
        },{
            title: "",
            imgUrl: "e19c0b214599763.Y3JvcCw0MzMwLDMzODYsMCw4Nzg.jpg"
        },{
            title: "",
            imgUrl: "elongated-can-drink-mockup_23-2151855909.avif"
        },{
            title: "",
            imgUrl: "roman-tikhonov-hero-setup-16-37-a.jpg"
        },
    ]
    const [currentIndex, setCurrentIndex] = useState<number>(2);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === cardItems.length - 1 ? 0 : prev + 1));
    };

    // Synchronized timer hook
    useEffect(() => {
        // Start a fresh 3-second countdown
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        // Cleanup clears the timer immediately when buttons are clicked
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <Swiper
                modules={[EffectCoverflow, Navigation]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={1}
                coverflowEffect={{
                    rotate:2,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                navigation={false}
                className="mySwiper"
            >
                {cardItems.map((item, index) => (
                    <SwiperSlide key={index} className="w-1/2 h-fit bg-neutral-400 rounded-xl flex items-center justify-center" style={{width: 'fit-content', height: "50vh"}}>
                        <motion.img className="h-full" src={item.imgUrl} alt=""/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

const HeroSection = () => {
    const [trigger, setTrigger] = useState<boolean>(false)

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
                    {/*<Link to="/shop" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="px-8 py-3 bg-black hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg shadow-neutral-500 rounded-full text-white flex gap-3 items-center">Shop Now*/}
                    {/*    <FaBottleWater className={`text-2xl transition-all duration-300 ease-in-out ${isHovering && "rotate-90"}`}/>*/}
                    {/*</Link>*/}

                </motion.div>
                <motion.div className="w-full lg:w-2/3 lg:mr-0 h-full flex items-center justify-center gap-10">
                    {/*<motion.img className="h-full" src="/" alt=""/>*/}
                    <Carousel/>
                </motion.div>
        </section>
    )
}

export default HeroSection;