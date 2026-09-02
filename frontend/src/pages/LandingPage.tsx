import HeroSection from "../components/HeroSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import RenderAdvantages from "../components/RenderAdvantages.tsx";

const LandingPage = () => {
    return (
        <main className='overflow-hidden bg-background'>
            <HeroSection/>
            <AboutSection/>
            <RenderAdvantages/>
        </main>
    )
}

export default LandingPage;