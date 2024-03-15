import { Suspense, lazy } from 'react';

// Lazy load the components
const LazyAbout = lazy(() => import('../../components/About'))
const LazyHero = lazy(() => import('../../components/Hero'))
const LazyForm = lazy(() => import('../../components/Form'))
const LazyAI = lazy(() => import('../../components/AI'))
const LazyFooter = lazy(() => import('../../components/Footer'))
const LazyNavbar = lazy(() => import('../../components/Navbar'))
// const LazyAlert = lazy(() => import('../../components/Alert')); // Uncomment if needed

export default function Landing() {
    return (
        <div className="overflow-hidden max-w-fit">
            <Suspense fallback={<div>Loading...</div>}>
                <LazyHero />
                <LazyNavbar className="absolute top-0 w-full z-1" />
                <LazyAI className="py-10 bg-gradient-to-r to-[#c6830e] from-[#ecc243] w-dvh h-dvh flex items-center justify-center relative overflow-hidden" />

                {/* Uncomment if needed */}
                {/* <LazyAlert className="lg:flex hidden absolute flex-col justify-center w-56 rounded-3xl right-10 bottom-12 h-36 bg-[#292d32] px-5 text-[#fff]" /> */}

                <LazyAbout className="bg-[#e9e9e9] py-8 lg:flex flex-row-reverse px-5 lg:px-10" />
                <div className="bg-[#e9e9e9] sm:pt-10 px-5">
                    <LazyForm className="mx-auto border-box shadow-2xl flex flex-col gap-4 max-w-[600px] w-full bg-[white] pt-12 rounded-3xl relative z-10 sm:mx-auto mb-[-110px]" />
                </div>
                <LazyFooter />
            </Suspense>
        </div>
    )
}
