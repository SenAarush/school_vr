import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"

export default function Chemverse() {
    return (
        <>
            <Hero className="absolute z-0"/>
            <Navbar className="absolute top-0 w-full z-1" />
        </>


    )
}