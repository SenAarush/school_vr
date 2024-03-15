import { Link } from "react-router-dom"

type NavbarProps = {
    className?: string,
}

export default function Navbar(props: NavbarProps) {
    const LinkClass: string = "hover:text-[#000] transition duration-[0.4s] text-[#fff] px-4 text-base hover:underline hover:underline-offset-8"

    return (
        <nav className={props.className}>
            <div className="relative flex items-center justify-center w-full px-10 py-12 md:py-8">
                <img src="/explore_white.png" className="h-8 md:h-7 " />
                <img src="/Icon.png" className="h-[35px] hover:scale-125 transition duration-[0.4s] lg:absolute ml-auto" />
                <ul className="hidden lg:flex lg:items-center lg:ml-auto">
                    <Link to="" className={LinkClass}>About Us</Link>
                    <Link to="" className={LinkClass}>Blogs</Link>
                    <Link to="" className={LinkClass}>Book A Demo</Link>
                    <button className="bg-[#fff] hover:scale-110 transition duration-[0.4s] tracking-wide py-2 px-4 text-sm rounded-full hover:text-[#fff] hover:bg-[#000]">Get in Touch</button>
                </ul>
            </div>
            {/* <Sidebar className="bg-[#000]/20 opacity-90 absolute max-w-[425px] rounded-r-lg min-h-[93dvh] py-8 top-7 px-8 backdrop-filter backdrop-blur-sm" /> */}
        </nav>
    )
}