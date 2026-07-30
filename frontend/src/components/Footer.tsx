import {CgFacebook, CgInstagram, CgTwitter, CgYoutube} from "react-icons/cg";
import {BiLogoTiktok, BiPhone} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
    interface Link {
        name: string;
        url: string;
    }

    interface LinkCategories {
        title: string;
        links: Link[]
    }

    const linkCategories: LinkCategories[] = [
        {
            title: "Customer Service",
            links: [
                {
                    name: "Help",
                    url: "/help",
                },
                {
                    name: "Shipping & Return",
                    url: "/shipping",
                },
                {
                    name: "Payment Methods",
                    url: "/payments",
                },
                {
                    name: "Policies",
                    url: "/policies",
                },
                {
                    name: "Contact Us",
                    url: "/contactUs",
                }
            ]
        },
        {
            title: "Our Company",
            links: [
                {
                    name: "About",
                    url: "/about",
                },
                {
                    name: "Gift Cards",
                    url: "/giftcards",
                },
                {
                    name: "Offers",
                    url: "/offers",
                },
                {
                    name: "Ambassador Program",
                    url: "/ambassadorProgram",
                }
            ]
        },
        {
            title: "Resources",
            links: [
                {
                    name: "Wholesale",
                    url: "/wholesale",
                },
                {
                    name: "CorporateSales",
                    url: "/corporateSales",
                },
                {
                    name: "Email Preferences",
                    url: "/emailPreferences",
                },
                {
                    name: "Careers",
                    url: "/Careers",
                },
                {
                    name: "Customer Reviews",
                    url: "/customerReviews",
                }
            ]
        },
    ]

    return (
        <section className="relative h-fit bg-black flex flex-col items-center justify-start pt-20 px-10 lg:px-20 mt-50">
            <div className="w-full mb-10 h-fit flex flex-col lg:flex-row gap-10 items-start justify-between">
                <div className="w-full lg:w-1/3 text-white flex fit flex-col items-start justify-start gap-5">
                    <img src="/H2Ware-full-logo.png" className="w-1/2 lg:mb-10" alt=""/>
                    <h3 className="text-lg">Let's Get Social</h3>
                    <div className="w-fit gap-3 h-fit flex items-center justify-between">
                        <CgInstagram  className="size-8"/>
                        <CgFacebook  className="size-8"/>
                        <CgTwitter  className="size-8"/>
                        <BiLogoTiktok  className="size-8"/>
                        <CgYoutube  className="size-8"/>
                    </div>
                    <div className="w-2/3 h-fit mt-10 flex items-start justify-between pb-5">
                        <img src="/img_2.png" className="w-1/3" alt=""/>
                        <img src="/img_3.png" className="w-1/3" alt=""/>
                        <img src="/img_4.png" className="w-1/3" alt=""/>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 flex text-white h-fit flex-col lg:flex-row items-start justify-between">
                    {linkCategories.map((linkCat) => (<div className="w-full lg:w-1/3 h-fit flex flex-col items-start justify-start gap-5">
                        <h2 className="font-bold text-xl">{linkCat.title}</h2>
                        {linkCat.links.map((link) => (
                            <Link to={link.url}>{link.name}</Link>
                        ))}
                    </div>))}
                </div>
                <div className="w-full lg:w-1/3 flex h-fit flex-col items-start justify-between">
                    <div className="w-full h-fit flex flex-col items-start justify-start text-white">
                        <h2 className="text-xl font-bold pb-5">Stay In Touch</h2>
                        <p>
                            Get the inside scoop on new products, promotions, bottle designs, accessories and more.
                        </p>
                        <div className="w-full h-fit flex items-center justify-between gap-5">
                            <input placeholder="Enter your email address"
                                   className="bg-white text-black w-2/3 pl-4 rounded-lg h-10 my-5"
                                   type="email"/>
                            <button className="w-1/3 h-10 text-white flex items-center justify-center gap-2  bg-neutral-700 rounded-lg">
                                Sign Up
                                <BiPhone className=""/>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            <div className="w-full h-fit flex flex-row lg:justify-start lg:items-start text-white/50 my-10">
                <span>{`©  H2Ware ${Date().split(' ')[3]} | Durban, South Africa`}</span>
            </div>
        </section>
    )
}

export default Footer;