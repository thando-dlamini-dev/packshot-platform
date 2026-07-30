const Features = () => {
    interface Feature {
        title: string;
        description: string;
        bg: string;
        imgUrl: string;
    }

    const features: Feature[] = [
        {
            title: "Modular Design",
            description: "Change colors without buying a whole new bottle. Shells snap on and off.",
            bg: "bg-neutral-950",
            imgUrl: "/bottleFeature1.png"
        },
        {
            title: "Free Accessories",
            description: "Stainless-steel handle and extra shells come standard. No hidden costs.",
            bg: "bg-neutral-500",
            imgUrl: "/bottleFeature3.png"
        },
        {
            title: "Pro-Grade Vacuum Tech",
            description: "Enjoy 24-hour chill with zero bottle sweat. Double-wall stainless steel built to last.",
            bg: "bg-neutral-950",
            imgUrl: "/bottleFeature2.png"
        },
    ];
    
    return (
        <section className="flex min-h-screen flex-col items-start pt-10">
            <h1 className="text-4xl ml-5 font-bold py-20">How we stand out</h1>
            <div className="w-full gap-5 h-fit flex px-5 flex-col lg:grid lg:grid-cols-3  items-center justify-between">
                {features.map((feature, index) => (<div
                    key={index}
                    className={`relative w-full h-fit ${feature.bg} rounded-2xl`}>
                    <img className="w-full hover:scale-105 transition-all duration-300 ease-in-out"
                         src={feature.imgUrl} alt=""/>
                    <div
                        className="w-1/2 h-fit flex-col items-start justify-evenly gap-4 bg-white/0 backdrop-blur-sm p-5 rounded-lg absolute bottom-0 right-5">
                        <h2 className="text-white text-2xl lg:text-4xl font-bold pb-5">{feature.title}</h2>
                        <p className="text-white">{feature.description}</p>
                    </div>
                </div>))}
            </div>
        </section>
    )
}

export default Features;