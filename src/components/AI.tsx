
type AIProps = {
    className: string
}

export default function AI(props: AIProps) {
    return (
        <section className={props.className}>
            <div className="text-tertiary bg-[url('/hero2bg.png')] w-dvh h-dvh bg-center border bg-no-repeat px-5 flex flex-col justify-center bg-opacity-10">
                {/* <img src="/hero2bg.png" className="w-full h-full opacity-40 " /> */}
                <h1 className="text-wide text-3xl font-semibold text-center">AI. Analytics. Quiz</h1>
                <p className="capitalize  font-light  text-center text-base  py-2">school VR has a lot to offer to our new gen kids</p>
                <button type="submit" className="rounded-full bg-gradient-to-r from-[#292d32] to-[#4D5157] flex px-6 py-3 mt-10 mr-auto ml-auto items-center text-[#b6b6b6] text-center">
                    Know More
                </button>
                <img src="/globe.png" className="absolute h-1/6 top-0 left-[-8%] blur-[2px]" />
                <img src="/jigsaw.png" className="absolute h-[10%] right-0 top-[15%] rotate-90" />
                <img src="/growth.png" className="absolute h-[22%] bottom-[15%] left-[-15%] object-fill rotate-45" />
                <img src="/pencil.png" className="absolute h-1/6 bottom-0 right-[-12%] blur-[2px]" />
            </div>
        </section>
    )
}