import BackedBy from "../../components/BackedBy"

type UnamedFunctionProps = {
    className?: string
}

type AboutImageContainerProps = {
    className?: string
}

function AboutImageContainer(props: AboutImageContainerProps) {
    return (
        <div className={props.className}>
            <img src="/Logo.png" className="mx-auto lg:object-contain lg:mx-0 lg:scale-150 py-11" />
        </div>
    )
}
export default function UnamedFunction(props: UnamedFunctionProps) {
    return (
        <div className={props.className}>

            {/* Top image */}
            <AboutImageContainer className="lg:flex lg:justify-center lg:items-center lg:w-[700px] lg:max-w-xl"/>

            <section className="flex flex-col lg:max-w-[810px] sm:items-center lg:pb-5">
                
                <div className="left-0 flex flex-col mb-5 lg:self-start">
                    <h3 className="relative text-xl font-thin tracking-wide text-center lg:text-left top-1">About</h3>
                    <p className="flex justify-center gap-4 text-6xl font-bold uppercase lg:justify-start ">
                        <span>School</span>
                        <span className="font-extralight">VR</span>
                    </p>
                </div>
                
                <p className="text-sm pb-12 pt-6 text-[#4b4b4e] font-light">
                    Introducing SchoolVR, a state-of-the-art Virtual Reality (VR) educational app designed to revolutionize the learning experience. With a sleek, futuristic interface, SchoolVR offers an immersive, interactive environment that brings education to life. Our feature-rich platform integrates advanced analytics and Artificial Intelligence (AI) to provide personalized learning paths for each student. Teachers and schools can leverage these insights to tailor instruction, enhancing engagement and improving outcomes. Parents gain a window into their child’s progress, with detailed reports highlighting strengths and areas for improvement. But most importantly, students are empowered in their learning journey, exploring concepts at their own pace in a stimulating VR world. SchoolVR is not just an app; it’s a universe of knowledge at your fingertips. Join us in shaping the future of education.
                </p>
                
                <BackedBy className="bg-[#fff] lg:self-start rounded-3xl sm:max-h-32  sm:rounded-lg sm:hover:ring-2 sm:hover:ring-[orange] sm:transition sm:duration-[400ms] lg:w-full shadow-xl mb-7 py-6 lg:py-2" />
                
            </section>
        </div>
    )
}