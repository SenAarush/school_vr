import SubSlider from "./SubSlider"

export default function VR() {
    return (
        <>
            <section className="h-[90dvh] opacity-[95%] bg-rect border border-black bg-cover bg-no-repeat flex flex-col items-center">
                <SubSlider className="flex gap-8 mt-16"></SubSlider>
                <img src="/curved line.png" width="100%" className="scale-110 mt-6"/>

                <img src="/Subtract.png" className="py-7 w-full scale-110"/>
                {/* <video src="/vid.mp4" autoPlay muted loop className="object-cover absolute top-0 left-0 mix-blend-screen" >
                </video> */}
                <h1 className="text-4xl font-semibold text-tertiary mt-5 py-5">BioVerse</h1>


                <p className="px-3 text-center text-base text-tertiary py-2">Uncover the wonders of life with Bioverse, where students engage in immersive journeys through biological structures and processes.</p>

                <button className="bg-[#333338] text-[#9EA0A8] shadow-md tracking-wide py-2 px-4 text-sm rounded-full border border-[#9EA0A8] mt-20">Know More</button>
            </section>
        </>
    )
}