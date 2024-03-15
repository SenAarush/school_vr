import SchoolHeroText from "./SchoolHeroText"
export default function Hero() {
    return (
        <section>
            <img src="/hero.png" className='absolute w-full h-full'/>
            <div className="xl:pt-10 flex flex-col items-center justify-center ml-auto h-dvh w-[100dvw]">
                <div className="relative z-10 bg-[url('/vec_outline.png')] min-w-full min-h-[68%] bg-no-repeat bg-center">
                    <div className="bg-[url('/vec.png')] min-w-[100%] min-h-[100%] bg-no-repeat bg-center relative top-0 flex flex-col items-center justify-center sm:pt-10">
                        <img src="/bag.png" className=" max-h-[80%] absolute top-10 xl:top-[-5%] md:top-14 sm:top-12 scale-100 z-0 animate-move-up-down" />
                        <SchoolHeroText className="pt-16 text-6xl font-bold tracking-wide uppercase md:pt-0 text-tertiary md:text-9xl sm:pt-5 sm:text-7xl" />
                        <p className="relative top-40 text-center uppercase text-sm tracking-[6px]">
                            New Way of Learning
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
