import HeroSection from "../components/HeroSection.tsx";
import Footer from "../components/Footer.tsx"
import Works from "../components/Works.tsx";

const LandingPage = () => {
    return (
        <main className='overflow-hidden bg-black'>
            <HeroSection/>
            <Works/>
            <Footer/>
        </main>
    )
}

export default LandingPage;