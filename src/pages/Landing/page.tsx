import Form from "../../components/Form"
import About from "../../components/About"
import AI from "../../components/AI"
import Footer from "../../components/Footer"
// import Alert from "../../components/Alert"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"


type LandingProps = {
    className?: string
}


export default function Landing(props: LandingProps) {
    return (
        <div className={props.className}>
            <Hero />
            <Navbar className="absolute top-0 w-full z-1" />
            <AI className="py-10 bg-gradient-to-r to-[#c6830e] from-[#ecc243] w-dvh h-dvh flex lg:items-center lg:justify-center relative" />
            
            {/* place the alert in the starting section */}
            {/* <Alert className="lg:flex hidden absolute flex-col justify-center w-56 rounded-3xl right-10 bottom-12 h-36 bg-[#292d32] px-5 text-[#fff]" /> */}


            {/* No changes required */}
            <About className="bg-[#e9e9e9] py-8 lg:flex flex-row-reverse px-5 lg:px-10" />
            <div className="bg-[#e9e9e9] sm:pt-10 px-5">
                <Form className="mx-auto border-box shadow-2xl flex flex-col gap-4 max-w-[600px] w-full bg-[white] pt-12 rounded-3xl relative z-10 sm:mx-auto mb-[-110px]" />
            </div>
            <Footer />
        </div>
    )
}