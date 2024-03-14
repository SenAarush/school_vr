
import Form from "../../components/Form"
import UnamedFunction from "../Chemverse/UnamedSection"
import AI from "../../components/AI"
import Footer from "../../components/Footer"

type LandingProps = {
    className?: string
}

export default function Landing(props: LandingProps) {
    return (
        <div className={props.className}>
            {/* <Hero className="absolute z-0"/> */}
            {/* <Navbar className="absolute top-0 w-full z-1" /> */}
            {/* AI Analytics */}
            <AI className="bg-gradient-to-r from-[#c6830e] to-[#ecc243] border grid align-items-stretch" />
            <div>
                <UnamedFunction className="bg-[#e9e9e9] lg:flex flex-row-reverse px-5 lg:px-10" />
                {/* Add gradient background */}
                <div className="bg-[#e9e9e9] sm:pt-10">
                    <Form className="mx-auto border-box shadow-2xl flex flex-col gap-4 max-w-[600px] w-full bg-[white] pt-12 rounded-3xl relative z-10 sm:mx-auto mb-[-110px]" />
                </div>
                <Footer />
            </div>
        </div>

        // <div className={props.className}>Landing Page</div>
    )
}