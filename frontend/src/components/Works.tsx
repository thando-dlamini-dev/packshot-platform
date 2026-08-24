
const Works = () => {

    interface Work{
        name: string;
        sDescription: string;
        logo: string;
        imgUrl: string;
    }

    const works: Work[] = [
        {
            name: "Citrus",
            sDescription: "Celebrating the bright spirit of elevated nutrition.",
            logo: "C.,bg-yellow-600",
            imgUrl: "/CitrusPills-",
        },{
            name: "Quell",
            sDescription: "Capturing the effortless spirit of elevated sipping",
            logo: "Q.,bg-blue-600",
            imgUrl: "/QuellB-",
        },{
            name: "H2Ware",
            sDescription: "Capturing the effortless spirit of elevated sipping",
            logo: "Q.",
            imgUrl: "/H2ware-",
        },{
            name: "Quell",
            sDescription: "Capturing the effortless spirit of elevated sipping",
            logo: "Q.",
            imgUrl: "/Quell-7",
        },
    ]

    return (
        <section className="min-h-screen gap-10 bg-black px-20 mt-40 overflow-hidden flex flex-col items-start justify-between">
            <h1 className="text-4xl text-white pb-10">Our Work</h1>
            {works.map((work, index) =>
                <div key={index} className="w-full h-screen flex items-start justify-between gap-5">
                <div className="w-1/3 text-white h-2/3 rounded-lg flex flex-col items-start justify-between">
                    <h2 className="text-3xl">{work.name}</h2>
                    <div className="w-full h-fit flex flex-col items-start justify-between ">
                        <div className="flex items-center justify-start gap-5 w-full h-fit">
                            <div className={`size-fit rounded-sm flex items-center justify-center ${work.logo.split(',')[1]}`}>
                                <h1 className="font-bold text-black text-5xl m-1">{work.logo.split(',')[0]}</h1>
                            </div>
                            <h1>{work.sDescription}</h1>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 h-2/3 gap-2 overflow-hidden rounded-lg flex items-center justify-between">
                    <div className="rounded-xl w-2/3 h-full overflow-hidden flex items-center justify-center">
                        <img className="w-full hover:scale-105 opacity-100 hover:opacity-100 duration-300 ease-in-out" src={`${work.imgUrl.split('-')[0].replace('/', '')}${Number(work.imgUrl.split('-')[1])+1}.png`} alt=""/>
                    </div>
                    <div className="w-1/3 h-full gap-2 flex flex-col items-center justify-between">
                        <div className="rounded-xl w-full h-1/2 flex items-center justify-center overflow-hidden">
                            <img className="w-full hover:scale-105 opacity-100 hover:opacity-100 duration-300 ease-in-out" src={`${work.imgUrl.split('-')[0].replace('/', '')}${Number(work.imgUrl.split('-')[1]) + 2}.png`} alt=""/>
                        </div>
                        <div className="rounded-xl w-full h-1/2 flex items-center justify-center overflow-hidden">
                            <img className="w-full hover:scale-105 opacity-100 hover:opacity-100 duration-300 ease-in-out" src={`${work.imgUrl.split('-')[0].replace('/', '')}${Number(work.imgUrl.split('-')[1]) + 3}.png`} alt=""/>
                        </div>
                    </div>

                </div>
            </div>)}
        </section>
    )
}

export default Works;