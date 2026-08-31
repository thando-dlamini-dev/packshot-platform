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
        <section className="relative font-poppins h-fit bg-neutral-950 flex flex-col items-center justify-between pt-20 px-10 lg:px-20 mt-50">
            <div className="w-full mb-10 h-fit flex flex-col lg:flex-row gap-10 items-start justify-between">
                <div className="w-full lg:w-2/3 h-fit text-white flex fit items-center justify-start gap-5">
                    <img className="w-40 mr-1" src="/VectorRay-Logo1.png" alt=""/>
                    <h1 className="font-bold text-[11rem] font-boldonse">VectorRay.</h1>
                </div>
                <div className="w-full lg:w-1/3 flex text-white h-fit flex-col lg:flex-row items-start justify-between">
                    {linkCategories.map((linkCat) => (<div className="w-full lg:w-1/3 h-fit flex flex-col items-start justify-start gap-5">
                        <h2 className="font-bold text-xl">{linkCat.title}</h2>
                        {linkCat.links.map((link) => (
                            <Link to={link.url}>{link.name}</Link>
                        ))}
                    </div>))}
                </div>
            </div>
            <div className="w-full h-fit flex flex-row lg:justify-center lg:items-start text-white/50 my-10 lg:px-20 gap-10">
                <span>{`Copyright © VectorRay ${Date().split(' ')[3]}`}</span>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
        </section>
    )
}

export default Footer;