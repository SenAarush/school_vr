import { Suspense, lazy } from 'react';

// Lazy load the SchoolHeroText component
const LazySchoolHeroText = lazy(() => import('./SchoolHeroText'));

type HeroProps = {
    className?: string
}

export default function Hero(props: HeroProps) {
    return (
        <section className={props.className}>
            <div className="bg-hero bg-no-repeat bg-cover w-[100dvw] h-[110dvh] sm:h-[100dvh] flex flex-col justify-center items-center">
                <div className="bg-[url('vec_outline.png')] min-w-full min-h-[67.5%] bg-no-repeat bg-center">
                    <div className="bg-[url('/vec.png')] min-w-[100%] min-h-[100%] bg-no-repeat bg-center relative top-0 flex flex-col items-center justify-center">
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazySchoolHeroText className="pt-16 text-6xl font-bold tracking-wide uppercase md:pt-0 text-tertiary md:text-9xl sm:pt-5 sm:text-7xl" />
                        </Suspense>
                        <img src="/bag.png" className=" max-h-[80%] absolute xl:top-0 top-24 md:top-14 sm:top-12 scale-100 z-0" />
                        <p className="xl:bottom-0 md:bottom-0 absolute bottom-14 text-center uppercase text-sm tracking-[6px]">
                            New Way of Learning
                        </p>
                        {/* <button className="bg-[#fff] shadow-md tracking-wide mt-10 py-2 px-4 text-sm rounded-full md:hidden">Get in Touch</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
