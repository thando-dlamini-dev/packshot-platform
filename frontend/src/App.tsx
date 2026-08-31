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

const app = () => {
    const location = useLocation();

    return (
        <>
            <svg className="hidden">
                <defs>
                    <filter id="lens-refraction">
                        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.05" numOctaves="1" result="noise"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R"
                                           yChannelSelector="G"/>
                    </filter>
                </defs>
            </svg>

            {(location.pathname !== '/checkout' && location.pathname !== "/login" && location.pathname !== "/sign-up") && <Navbar/>}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/custom' element={<Custom/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/sign-up' element={<SignUpPage/>}/>
                    <Route path='/our-work' element={<WorksPage/>}/>
                </Routes>
                {(location.pathname !== '/checkout' && location.pathname !== "/login" && location.pathname !== "/sign-up") && <Footer/>}
            </AnimatePresence>
            <Toaster/>
        </>
    )
}

export default app;