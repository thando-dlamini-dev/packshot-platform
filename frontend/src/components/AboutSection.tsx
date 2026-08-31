import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const AboutSection = () => {
    return (
        <section className="h-screen px-20 my-50 flex lg:flex-row flex-col items-center justify-between bg-background text-text">
            <div className="h-full w-2/3 flex flex-col items-start justify-start">
                <h2></h2>
            </div>
            <div className="h-screen w-2/3 flex flex-col items-start justify-start py-20">
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