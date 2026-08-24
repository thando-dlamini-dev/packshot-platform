import {BsGoogle} from "react-icons/bs";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const login = async () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    }

    return (
        <section className="h-screen flex justify-center items-center bg-black">
            <div className="lg:w-1/3 h-full flex flex-col items-center justify-center gap-5 text-white">
                <div className="w-fit h-fit flex-col items-center justify-center gap-5 ">
                    <h2 className="text-3xl pb-10">Login in to VectorRay</h2>
                    <button onClick={() => login()} className="w-full h-fit border-[1px] border-neutral-500 hover:bg-neutral-200 hover:text-black transition-all duration-300 ease-in-out py-1 px-3 rounded-md text-lg gap-2 flex items-center justify-center">
                        <BsGoogle className="text-green-400"/> Continue with Google
                    </button>
                </div>
                <h3>New to VectorRay? <Link className="text-green-300 hover:text-green-200 transition-all duration-200 ease-in-out" to="/sign-up">Sign up for an account</Link></h3>
            </div>
            <div className="lg:w-2/3  h-full flex flex-col items-center justify-start gap-5 bg-neutral-500">
                <img src="/" alt=""/>
            </div>

        </section>
    )
}

export default LoginPage