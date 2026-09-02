import {Link} from "react-router-dom";
import {useState} from "react";
import api from "../axios.config.ts";
import {toast} from "react-hot-toast"

interface formData {
    firstName: string;
    lastName: string;
    email: string;
}

const CheckoutPage = () => {
    const [ email, setEmail ] = useState<string>("");
    const [ firstName,setFirstName ] = useState<string>("");
    const [ lastName, setLastName ] = useState<string>("");
    const [ discountCode, setDiscountCode ] = useState<string>("");
    const [ subTotal, setSubTotal ] = useState<number>(15000);
    const [ Total, setTotal ] = useState<number>(0);

    const verifyCode = async (code: string) => {
        const response = await api.get(`api/discounts/code:${code}`)
        if(response.data.success === false){
            toast.error("Discount Code is Invalid or expired.")
        }
    }

    return(
        <section className="min-h-screen text-text bg-background flex flex-col items-center justify-start">
            <div className="py-10 border-b-1 border-neutral-800 w-full flex items-center justify-center">
                <Link to="/" className={`w-1/4 lg:w-fit lg:h-4/5 lg:flex justify-center gap-1 text-text items-center`}>
                    <img className="w-14 mr-3" src="/VectorRay-Logo1.png" alt=""/>
                    <h1 className="font-bold font-poppins text-6xl flex items-center justify-center">VectorRay.</h1>
                </Link>
            </div>
            <div className="h-screen lg:px-20 w-full flex flex-col md:flex-row lg:flex-row items-start justify-between">
                <div className="w-full lg:w-1/2 p-10 pt-10 border-r-1 border-neutral-800 h-full flex flex-col items-end justify-start">
                    <div className="w-full lg:w-2/3 md:w-2/3 flex-col items-start justify-start gap-5">
                        <h3 className="font-poppins">Contact</h3>
                        <input onChange={(e) => setEmail(e.target.value)} value={email}
                               className="border-neutral-600 w-full border-1 py-2 my-3 px-2 rounded-lg" name="email"
                               placeholder="Email" type="text"/>
                        <div className="w-full flex items-center justify-between gap-3">
                            <input onChange={(e) => setFirstName(e.target.value)} value={firstName}
                                   className="border-neutral-600 w-full border-1 py-2 my-3 px-2 rounded-lg"
                                   name="first name" placeholder="First Name" type="text"/>
                            <input onChange={(e) => setLastName(e.target.value)} value={lastName}
                                   className="border-neutral-600 w-full border-1 py-2 my-3 px-2 rounded-lg"
                                   name="last name" placeholder="Last Name" type="text"/>
                        </div>
                        <button onClick={() => verifyCode(discountCode)} className="bg-theme w-full shadow-md py-2 my-3 px-2 rounded-lg"
                                name="last name">
                            Pay Now
                        </button>
                    </div>
                </div>
                <div
                    className="w-full inline-block lg:w-1/2 p-10 pt-10 h-full bg-neutral-900 flex-col items-start justify-start">
                    <div className="w-full lg:w-1/2 md:w-2/3 flex-col items-start justify-start gap-5">
                        <div className="w-full flex items-center justify-between gap-3">
                            <input onChange={(e) => setDiscountCode(e.target.value)} value={discountCode}
                                   className="border-neutral-600 w-full border-1 py-2 my-3 px-2 rounded-lg"
                                   name="discount" placeholder="Discount code or card" id="discount" type="text"/>
                            <button onClick={() => verifyCode(discountCode)} className="bg-theme py-2 my-3 px-2 rounded-lg" name="last name">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutPage