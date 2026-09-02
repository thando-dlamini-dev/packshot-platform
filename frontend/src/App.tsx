import {useLocation} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import { Toaster } from "react-hot-toast"
import LandingPage from "./pages/LandingPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Custom from "./pages/Custom.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import WorksPage from "./pages/WorksPage.tsx";
import Footer from "./components/Footer.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";

const app = () => {
    const location = useLocation();

    return (
        <>
            {(location.pathname !== '/checkout' && location.pathname !== "/login" && location.pathname !== "/sign-up") && <Navbar/>}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/custom' element={<Custom/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/sign-up' element={<SignUpPage/>}/>
                    <Route path='/our-work' element={<WorksPage/>}/>
                    <Route path='/checkout' element={<CheckoutPage/>}/>

                </Routes>
            </AnimatePresence>
            <div
                className="fixed bottom-0 left-0 right-0 h-20 z-50 pointer-events-none bg-gradient-to-t from-black/0 to-transparent backdrop-blur-[6px]"
                style={{
                    // Applies the SVG distortion to the content behind this div
                    backdropFilter: 'url(#lens-refraction) blur(6px)',
                    // Progressively fades out both the color and the distortion from bottom to top
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%)'
                }}
            >
            </div>
            {(location.pathname !== '/checkout' && location.pathname !== "/login" && location.pathname !== "/sign-up") && <Footer/>}
            <Toaster/>
        </>
    )
}

export default app;