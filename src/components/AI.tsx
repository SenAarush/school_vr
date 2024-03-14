
type AIProps = {
    className: string
}

export default function AI(props: AIProps) {
    return (
        // <section className={props.className}>
        <section className={props.className}>
            <div className="absolute z-0 bg-[url('/hero2bg.png')] top-0 w-full h-full lg:bg-contain bg-center bg-no-repeat opacity-30 lg:scale-90 lg:top-5">
            </div>
            <div className="absolute z-10">
                <h1 className="text-center text-font-semibold text-[#ffffffb4] lg:text-5xl lg:font-bold text-wide">AI. Analytics. Quiz</h1>
                <p className="py-2 text-base text-center capitalize text-[#ffffffb4] font-normal">school VR has a lot to offer to our new gen kids</p>
                <button type="submit" className="rounded-full bg-gradient-to-r from-[#292d32] to-[#4D5157] flex px-6 py-3 mt-10 lg:mt-6 mr-auto ml-auto items-center text-[#b6b6b6] text-center lg:hover:scale-110 lg:transition lg:duration-[400ms]">
                    Know More
                </button>
            </div>
            {/* Shapes Display only on large viewport */}
            {/* Small circle */}
            <div className="lg:block right-56 hidden absolute rounded-full border border-[white] h-32 w-32 top-32"></div>
            {/* Big Circle */}
            <div className="lg:block hidden absolute rounded-full border border-[white] lg:h-[360px] lg:w-[360px] lg:bottom-11 left-[-180px]"></div>

            <img src="/globe.png" className="lg:h-3/5 absolute h-1/5 left-[-3%] top-0 blur-[2px]" />
            <img src="/jigsaw.png" className="lg:h-1/5 lg:rotate-0 lg:top-0 right-48 absolute h-[10%] rotate-90" />
            <img src="/growth.png" className="lg:bottom-0 lg:h-[45%] lg:left-[20%] absolute h-[22%] object-fill" />
            <img src="/pencil.png" className="lg:bottom-0  lg:h-[28%] lg:right-0 absolute h-1/6 blur-[2px]" />
        </section>
    )
}