import {useState} from "react";
import {PlusCircle, PlusCircleIcon} from "lucide-react";

interface Benefit{
    imgUrl:string;
    title:string;
    description:string;
}

const RenderAdvantages = () => {
    const benefits: Benefit[] = [
    {
        imgUrl: "/SliderImage1.pn",
        title: "Cost Efficient by Design",
        description:
            "You pay to build the 3D asset once. Every additional angle, background, or lighting variation is rendered digitally at a fraction of the cost of a reshoot. No location rentals, no camera crews, no shipping fragile prototypes to a studio."
    },
    {
        imgUrl: "/icons/time.svg",
        title: "Faster Time to Market",
        description:
            "Visuals can be generated before your product even reaches manufacturing. No weather delays, no studio availability windows. Submit your reference photos and get render-ready imagery on a timeline that keeps up with your launch."
    },
    {
        imgUrl: "/icons/flexibility.svg",
        title: "Unlimited Variations from One Model",
        description:
            "Changing a label color, background, or finish requires no reshoot. One 3D model produces your entire image catalog with perfect lighting, angle, and shadow consistency across every shot — something a physical studio cannot guarantee."
    },
    {
        imgUrl: "/icons/quality.svg",
        title: "Flawless Results Every Time",
        description:
            "Physical prototypes arrive with scratches, dents, and misaligned labels that demand heavy retouching. CGI renders mathematically perfect surfaces. The same model used for your packshot can later be repurposed for video, 360 viewers, or AR."
    }
]

    const [ hovered, setHovered ] = useState<string>("")

    return (
        <section className="min-h-screen font-poppins px-20 lg:mt-30 flex flex-col items-start justify-center gap-20 lg:justify-start lg:items-start bg-background text-text">
            <div className="lg:w-1/2 h-fit p-5 flex mb:50 flex-col items-start justify-between text-start">
                <h2 className="font-bold text-xl lg:text-6xl pb-10">
                    Why 3D rendering beats traditional photography
                </h2>
                <p>
                    The way product imagery is made has changed. Shipping your product to a studio, booking a photographer, and waiting days for edited shots is no longer the only option — and for most small sellers, it is not the most practical one either.

                    3D rendering gives you studio quality without the studio, and a single model that pays for itself every time you need a new shot.
                </p>
            </div>
            <div className="w-full relative fit gap-5 flex items-center justify-between">
                {benefits.map((benefit, index) => (
                    <div key={index} className="w-1/4 text-text relative aspect-square overflow-hidden p-5 flex flex-col items-start justify-between">
                        <h1 className="z-10">{benefit.title}</h1>
                        <h1 className="z-10">{benefit.description}</h1>
                        <img className="w-full absolute top-0 left-0 rounded-xl h-full object-cover" src={benefit.imgUrl} alt=""/>
                        <PlusCircleIcon className="absolute right-5 top-5"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RenderAdvantages