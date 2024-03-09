import { Link } from "react-router-dom"
import Sidebar from "./SideBar"

type NavbarProps = {
    className?: string,
}

export default function Navbar(props: NavbarProps) {
    const LinkClass: string = "text-[#fff] px-4 text-base hover:underline hover:underline-offset-8"

    return (
        <nav className={props.className}>
            <div className="flex md:py-8 py-12 w-full px-10 justify-center items-center relative">
                <img src="/explore_white.png" className="md:h-7 h-8 " />
                <img src="/Icon.png" className="h-[35px] lg:absolute ml-auto" />
                <ul className="lg:flex lg:items-center lg:ml-auto hidden">
                    <Link to="" className={LinkClass}>About Us</Link>
                    <Link to="" className={LinkClass}>Blogs</Link>
                    <Link to="" className={LinkClass}><span className="text-[#000]">Book A Demo</span></Link>
                </ul>
            </div>
            {/* <Sidebar className="bg-[#000]/20 opacity-90 absolute max-w-[425px] rounded-r-lg min-h-[93dvh] py-8 top-7 px-8 backdrop-filter backdrop-blur-sm" /> */}
        </nav>
    )
}