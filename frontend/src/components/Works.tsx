
const Works = () => {


    return (
        <section className="min-h-screen gap-10 bg-black px-20 mt-40 overflow-hidden flex flex-col items-start justify-between">
            <h1 className="text-4xl text-white pb-10">Our Work</h1>
            <div className="w-full h-screen flex items-start justify-between gap-5">
                <div className="w-1/3 text-white h-2/3 rounded-lg flex flex-col items-start justify-between">
                    <h2 className="text-3xl">Quell</h2>
                    <div className="w-full h-fit flex flex-col items-start justify-between ">
                        <div className="flex items-center justify-start gap-5 w-full h-fit">
                            <div className="size-fit rounded-sm flex items-center justify-center bg-white">
                                <h1 className="font-bold text-black text-5xl m-1">Q.</h1>
                            </div>
                            <h1>Capturing the effortless spirit of elevated sipping</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-200 w-2/3 h-2/3 overflow-hidden rounded-lg flex items-center justify-center">
                    <img className="w-full " src="/Quell7.png" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Works;