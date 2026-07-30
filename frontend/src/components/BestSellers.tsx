import { FaHeart, FaCartPlus} from "react-icons/fa";
import { Link } from "react-router-dom";
import {useState} from "react";

const BestSellers = () => {

    interface BestSeller{
        name: string;
        starRating: number;
        type: string;
        description: string;
        imgUrl: string;
        colours: string[]
    }

    const bestSellers:BestSeller[] = [
        {
            name: "Pink-Purple",
            starRating: 5,
            type: "Drink Bottle",
            description: "",
            imgUrl: "/bottle1.png",
            colours: [
                "bg-purple-",
                "bg-neutral-300",
                "bg-pink-500",
                "bg-neutral-400",
                "bg-pink-300",
            ]
        },{
            name: "Orange-Green",
            starRating: 5,
            type: "Drink Bottle",
            description: "",
            imgUrl: "/bottle2.png",
            colours: [
                "bg-brown-300",
                "bg-orange-500",
                "bg-green-300",
            ]
        },{
            name: "Black-White",
            starRating: 5,
            type: "Drink Bottle",
            description: "",
            imgUrl: "/bottle3.png",
            colours: [
                "bg-neutral-100",
                "bg-neutral-900",
            ]
        },{
            name: "",
            starRating: 5,
            type: "Drink Bottle",
            description: "",
            imgUrl: "/bottle1.png",
            colours: [
                "bg-purple-200",
                "bg-neutral-300",
                "bg-pink-500",
                "bg-pink-500",
                "bg-pink-300",
            ]
        },
    ]

    const [wishList, setWishList] = useState<BestSeller[]>([]);

    const [imgHover, setImgHover] = useState<number>(-1);


    return (
        <section className="relative h-fit flex flex-col items-center justify-start px-5 pt-10 lg:px-20">
            <div className="w-full h-fit flex items-center justify-between">
                <h2 className="text-black font-bold text-4xl">Our Bestsellers</h2>
                <Link to="/shop-all" className="text-lg rounded-full px-3 py-0 border-neutral-600 border-1">Shop All</Link>
            </div>
            <div className="pt-10 w-full min-h-2 flex flex-col lg:flex-row justify-evenly items-center mt-10 gap-3">
                {bestSellers.map((bestSeller, index) => (
                    <div
                        key={bestSeller.name}
                        onMouseEnter={() => setImgHover(index)}
                        onMouseLeave={() => setImgHover(-1)}
                        className="relative border-black w-full p-5 lg:w-1/4 min-h-52 flex flex-col bg-neutral-200 justify-start items-start gap-5 rounded-3xl text-black">
                        <h3 className="text-black font-bold">{bestSeller.name}</h3>
                        <span
                            className="absolute px-2 py-1 bg-black text-white rounded-full top-5 right-5">Best Seller</span>
                        <img className={`w-full transition-all duration-300 ease-in-out ${index === imgHover ? "scale-115" : ""}`} src={bestSeller.imgUrl} alt=""/>
                        <div className="w-full h-fit flex justify-center gap-3 items-center">
                            {bestSeller.colours.map((colour) => (<div key={colour} className={`size-8 ${colour} rounded-full border-neutral-500 border-1 shadow-md shadow-neutral-500`}></div>))}
                        </div>
                        <div className="w-full h-fit flex items-center justify-between gap-3">
                        <button
                                className="cursor-pointer w-full h-12 bg-black font-bold flex justify-center hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg shadow-neutral-500 rounded-lg text-white gap-3 items-center">
                            Add to cart <FaCartPlus/>
                        </button>
                        <button
                            onClick={() => setWishList([...wishList, bestSeller])}
                                className="cursor-pointer w-1/4 h-12 bg-black font-bold flex justify-center hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg hover:text-red-500 shadow-neutral-500 rounded-lg text-white gap-3 items-center">
                            <FaHeart/>
                        </button>
                    </div>
                </div>))}
            </div>

        </section>
    )
}

export default BestSellers;