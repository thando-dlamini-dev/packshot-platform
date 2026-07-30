import {useLocation} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import { Toaster } from "react-hot-toast"
import LandingPage from "./pages/LandingPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Custom from "./pages/Custom.tsx";

const app = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/checkout' && <Navbar />}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/custom' element={<Custom/>}/>
                </Routes>
            </AnimatePresence>
            <Toaster/>
        </>
    )
}

export default app;