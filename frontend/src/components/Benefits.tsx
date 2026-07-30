
const Benefits = () => {
    const benefits:string[] = [
        "Derma-Recommended",
        "All-Day Moisture",
        "Gluten-Free",
        "Paraben-Free"
    ]

    return (
        <section className="w-full h-20 bg-white animate-infinite-scroll inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {benefits.map((benefit) => (
                <span>{benefit}</span>
            ))}
        </section>
    )
}

export default Benefits;