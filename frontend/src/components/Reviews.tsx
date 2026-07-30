import { useRef, useState } from 'react'
import {FaCircleArrowLeft, FaCircleArrowRight} from "react-icons/fa6";

const Reviews = () => {
    interface Review {
        userName: string;
        email: string;
        profileColor: string;
        title: string;
        review: string;
    }

    const [hoveredReview, setHoveredReview] = useState<number>(-2);
    const [position, setPosition] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
            {if(position !== 0)
                setPosition(position - 1)}
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
            if(position <= reviews.length - 1)
                setPosition(position + 1)

        }
    };


    const reviews: Review[] = [
        {
            userName: "MelisaP",
            email: "MelisaPine@gmail.com",
            profileColor: "bg-purple-500",
            title: "Built to last",
            review: "I've dropped this thing more times than I can count. Still works perfectly. The durability is unreal.",
        },
        {
            userName: "TrailRunnerMike",
            email: "mike.runs@fastmail.com",
            profileColor: "bg-green-600",
            title: "Love the shell system",
            review: "Being able to swap shells is cool. But honestly the bottle itself is so durable I probably won't need to.",
        },
        {
            userName: "SipAndSave",
            email: "sara.k@earthlink.net",
            profileColor: "bg-amber-400",
            title: "No discoloration after months",
            review: "My old bottle turned yellow around the mouthpiece. H2Ware looks brand new. Zero fading or staining.",
        },
        {
            userName: "CoffeeAddictPete",
            email: "pete.coffee@brewmail.com",
            profileColor: "bg-stone-700",
            title: "Rubber grip is a lifesaver",
            review: "My hands are always wet from washing mugs. The non-slip grip means I never drop my H2Ware.",
        },
        {
            userName: "NurseJenny",
            email: "jenny.rn@hospital.net",
            profileColor: "bg-sky-500",
            title: "Finally something that looks different",
            review: "Every other bottle looks the same. H2Ware's unique design actually stands out on my desk.",
        },
        {
            userName: "DeskNomad",
            email: "alex.wfh@remote.co",
            profileColor: "bg-indigo-400",
            title: "Still looks new",
            review: "Months of daily use, throwing it in my bag, knocking it over. No scratches, no discoloration. Impressed.",
        },
        {
            userName: "DadLifeRyan",
            email: "ryan.toddlerdad@gmail.com",
            profileColor: "bg-orange-500",
            title: "Non-slip grip = toddler approved",
            review: "My kid grabs it with sticky fingers. The rubber sleeve keeps it from flying across the room.",
        },
        {
            userName: "YogaWithZoe",
            email: "zoe.flow@yogamail.com",
            profileColor: "bg-pink-400",
            title: "Durable enough for hot yoga",
            review: "Sweaty hands, wooden floors, accidental bumps. This thing takes a beating and keeps going.",
        },
        {
            userName: "BikeCommuter",
            email: "bike.tom@cyclepost.com",
            profileColor: "bg-red-600",
            title: "The grip actually works",
            review: "I ride with one hand on the bottle. The rubber non-slip texture means it never slides off my handlebars.",
        },
        {
            userName: "TeaLadyMarge",
            email: "marge.tea@herbal.net",
            profileColor: "bg-emerald-500",
            title: "No color fading at all",
            review: "I left it in a sunny car for a week. The color is exactly the same. No discoloration whatsoever.",
        },
        {
            userName: "GymBro99",
            email: "lifts@ironmail.com",
            profileColor: "bg-slate-800",
            title: "People ask where I got it",
            review: "The unique design gets compliments every single gym session. Doesn't look like every other water bottle.",
        },
        {
            userName: "HikerAsh",
            email: "ash.trail@backcountry.com",
            profileColor: "bg-lime-600",
            title: "Survived a 10-foot fall",
            review: "Fell off a cliff ledge onto rocks. Barely a scuff. Durability is no joke with H2Ware.",
        },
        {
            userName: "TeacherKait",
            email: "kait.class@schooledu.org",
            profileColor: "bg-yellow-400",
            title: "Rubber grip saves my floors",
            review: "Kids knock it off my desk daily. The non-slip grip means it doesn't go flying. No dents in the tile.",
        },
        {
            userName: "ZeroWasteWill",
            email: "will.no.plastic@eco.net",
            profileColor: "bg-teal-600",
            title: "One bottle to rule them all",
            review: "Durable, no weird stains, unique looking. I don't need to buy another bottle ever again.",
        },
        {
            userName: "CarCupChampion",
            email: "drive.sip@roadmail.com",
            profileColor: "bg-blue-800",
            title: "No cup holder slip",
            review: "The rubber non-slip grip keeps it planted in my car's shallow cupholder. No more tipping over during turns.",
        },
        {
            userName: "ArtistLena",
            email: "lena.paints@studioart.com",
            profileColor: "bg-fuchsia-500",
            title: "Paint doesn't stick to it",
            review: "I'm messy. Acrylic paint wipes right off. No discoloration, no staining. H2Ware is accidental-artist-proof.",
        },
        {
            userName: "CampCook",
            email: "joe.campfire@outdoorpost.com",
            profileColor: "bg-amber-700",
            title: "Took a bear canister hit",
            review: "Dropped a full bear can on it. Not a dent. I don't know what they made this from but it's tough.",
        },
        {
            userName: "NurseLongShift",
            email: "carla.rn@hospital.net",
            profileColor: "bg-rose-400",
            title: "Stands out in the break room",
            review: "The unique design means no one accidentally takes my bottle. Also the grip is perfect for gloved hands.",
        },
        {
            userName: "HydrationTracker",
            email: "drinkup@habitmail.com",
            profileColor: "bg-cyan-500",
            title: "Rubber grip = no slips",
            review: "I have weak grip strength from an old injury. The non-slip texture makes it easy to hold all day.",
        },
        {
            userName: "HonestReviewer",
            email: "real.talk@consumer.net",
            profileColor: "bg-gray-500",
            title: "Shell is nice but the bottle is better",
            review: "The modular shell is a fun bonus. But honestly the durability and non-slip rubber grip are what sold me. Unique design too.",
        },
    ];

    return (
        <section className="flex h-fit flex-col items-start gap-10 pt-20 px-4">
            <div className="w-full flex items-center justify-between">
                <h1 className="font-bold text-2xl">What our customers say</h1>
                <div className="flex text-4xl lg:text-2xl items-center justify-center gap-3">
                    <FaCircleArrowLeft
                        onClick={scrollLeft}
                        className="cursor-pointer hover:scale-115 hover:opacity-70 transition"
                    />
                    <FaCircleArrowRight
                        onClick={scrollRight}
                        className="cursor-pointer hover:scale-115 hover:opacity-70 transition"
                    />
                </div>
            </div>

            <div
                ref={carouselRef}
                className="w-full h-55 flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth gap-5 py-10"
                style={{ scrollbarWidth: 'none' }}
            >
                
                {reviews.map((review, index) => (
                    <div
                        key={review.userName}
                        onMouseEnter={() => setHoveredReview(index)}
                        onMouseLeave={() => setHoveredReview(-2)}
                        className={`flex-none w-full lg:w-80 h-fit ${index === hoveredReview ? "lg:h-40" : "lg:h-20"} ${index+1 === hoveredReview ? "lg:h-30" : "lg:h-20"} ${index-1 === hoveredReview ? "lg:h-30" : "lg:h-20"} shadow-lg shadow-black/20 cursor-pointer transition-all duration-300 ease-in-out  snap-start rounded-2xl bg-neutral-300 p-5 flex flex-col gap-3`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`font-bold size-10 rounded-full flex items-center justify-center ${review.profileColor}`}>
                                {review.userName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h1 className="font-bold text-sm">{review.userName}</h1>
                                <p className="text-xs text-gray-600">{review.title}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 line-clamp-4">{review.review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews