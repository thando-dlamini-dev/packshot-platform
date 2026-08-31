import HeroSection from "../components/HeroSection.tsx";
import AboutSection from "../components/AboutSection.tsx";

const LandingPage = () => {
    return (
        <main className='overflow-hidden bg-background'>
            <HeroSection/>
            <AboutSection/>
        </main>
    )
}

export default LandingPage;