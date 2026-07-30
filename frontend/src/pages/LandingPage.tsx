import HeroSection from "../components/HeroSection.tsx";
import Footer from "../components/Footer.tsx"

const LandingPage = () => {
    return (
        <main className='overflow-hidden bg-black'>
            <HeroSection/>
            <Footer/>
        </main>
    )
}

export default LandingPage;