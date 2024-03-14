import SchoolHeroText from "./SchoolHeroText"

type HeroProps = {
    className?: string
}

export default function Hero(props: HeroProps) {
    return (
        <section className={props.className}>
            <div className="bg-hero bg-no-repeat bg-cover w-[100dvw] h-[110dvh] sm:h-[100dvh] flex flex-col justify-center items-center">
                <div className="bg-[url('vec_outline.png')] min-w-full min-h-[67.5%] bg-no-repeat bg-center">
                    <div className="bg-[url('/vec.png')] min-w-[100%] min-h-[100%] bg-no-repeat bg-center relative top-0 flex flex-col items-center justify-center">

                        <SchoolHeroText className="pt-20 text-6xl font-bold tracking-wide uppercase text-tertiary md:text-9xl sm:text-7xl md:pt-0" />

                        {/* Change MD media query */}

                        <img src="/bag.png" className=" max-h-[80%] absolute top-[-20px] md:top-0 scale-100 z-0" />

                        <div className="absolute bottom-[-160px] md:bottom-[-80px] py-5 w-full flex flex-col items-center">
                            <p className=" self-end w-full text-center uppercase text-sm tracking-[6px]">
                                New Way of Learning
                            </p>
                            {/* <BackedBy className="max-w-lg min-h-14 mt-5 rounded-md bg-[#fff] shadow-xl" /> */}
                            <button className="bg-[#fff] shadow-md tracking-wide mt-10 py-2 px-4 text-sm rounded-full md:hidden">Get in Touch</button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}