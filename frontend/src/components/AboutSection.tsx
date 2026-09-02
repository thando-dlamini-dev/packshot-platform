import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const AboutSection = () => {
    return (
        <section className="min-h-screen px-5 lg:px-20 pt-20 lg:pt-50 flex lg:flex-row flex-col items-start justify-start gap-20 lg:gap-0 lg:justify-between bg-background text-text">
            <div className="h-full font-poppins w-full lg:w-1/3 lg:mr-20 flex flex-col items-start justify-start">
                <h2 className="font-bold text-xl lg:text-6xl pb-10">
                    High-end product imagery. Built without a studio.
                </h2>
                <p className="lg:text-lg">
                    We build precise 3D models of your packaged products and render them into high-end images that build instant trust and convert browsers into buyers.

                    Send us reference photos and we handle everything from modeling to final render, delivering multiple angles and backgrounds from a single submission.
                </p>
            </div>
            <div className="h-fit aspect-square lg:aspect-auto w-full lg:w-2/3 flex flex-col items-start justify-start">
                <ReactCompareSlider
                    className="w-full h-2/3 rounded-xl"
                        itemOne={
                            <ReactCompareSliderImage
                                src="/SliderImage1.png"
                            />
                        } itemTwo={
                            <ReactCompareSliderImage
                                src="/SliderImage2.png"
                            />
                        }
                    onlyHandleDraggable={false}
                />
            </div>
        </section>
    )
}

export default AboutSection;