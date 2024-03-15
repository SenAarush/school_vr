
type AIProps = {
    className: string
}

export default function AI(props: AIProps) {
    return (
        // <section className={props.className}>
        <section className={props.className}>
            <div className="absolute z-0 bg-[url('/hero2bg.png')] top-0 w-full h-full lg:bg-contain bg-center bg-no-repeat opacity-30 xl:scale-90 xl:top-5">
            </div>
            <div className="absolute z-10 pt-20">
                <h1 className="text-center text-4xl font-bold text-[#ffffffb4] lg:text-5xl text-wide">AI. Analytics. Quiz</h1>
                <p className="py-2 text-base text-center capitalize text-[#ffffffb4] font-normal">school VR has a lot to offer to our new gen kids</p>
                <button type="submit" className="rounded-full bg-gradient-to-r from-[#292d32] to-[#4D5157] flex px-6 py-3 mt-10 xl:mt-6 mr-auto ml-auto items-center text-[#b6b6b6] text-center hover:scale-110 transition duration-[400ms]">
                    Know More
                </button>
            </div>
            {/* Shapes Display only on large viewport */}
            {/* Small circle */}
            <div className="xl:block right-56 hidden absolute rounded-full border border-[white] h-32 w-32 top-32"></div>
            
            {/* Big Circle */}
            <div className="xl:block hidden absolute rounded-full border border-[white] xl:h-[360px] xl:w-[360px] xl:bottom-11 left-[-180px]"></div>

            <img src="/globe.png" className="xl:h-3/5 absolute h-1/4 sm:left-[-3%] left-[-8%] top-0 blur-[2px]" />

            
            <img src="/jigsaw.png" className="absolute right-[-5.25%] rotate-90 top-52 lg:h-1/5 lg:rotate-0 lg:top-0 lg:right-44 md:h-32 h-24" />
            <img src="/growth.png" className="xl:bottom-0 xl:h-[45%] xl:left-[20%] left-0 bottom-0 absolute h-1/6 object-fill md:h-1/5" />
            <img src="/pencil.png" className="xl:bottom-0  xl:h-[28%] lg:right-0 bottom-[-5%] right-[-15%] absolute h-1/6 blur-[2px] md:h-1/5" />
        </section>
    )
}