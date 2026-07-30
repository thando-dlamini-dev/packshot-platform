const Custom = () => {
    return(
        <section className={`h-screen flex items-center justify-between`}>
            <div className={`w-1/2 h-full flex items-center justify-center`}>
                <div className="relative size-100">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <path
                            d="M 10 10 L 50 10 L 70 90 L 90 90"
                            fill="none"
                            stroke="#3b82f6"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            color={"#000000"}
                        />
                    </svg>
                </div>

            </div>
            <div className={`w-1/2 h-full flex items-center justify-center bg-neutral-400`}>
            </div>
        </section>
)
}

export default Custom