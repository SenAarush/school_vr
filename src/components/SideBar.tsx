import { Link } from "react-router-dom"
import Card from "./Card"

type SideBarProps = {
    className?: string
}


export default function Sidebar(props: SideBarProps) {
    const LinkClassHidden: string = "text-[#fff] text-base font-light hover:underline hover:underline-offset-8"

    const links: string[] = ["BioVerse", "ChemVerse", "AtomVerse", "SpaceVerse", "GeoVerse"]


    return (

        <div className={props.className}>
            <img src="/explore_white.png" className="h-[24px] relative top-[-10px] cursor-pointer" />
            <div className="flex gap-5 flex-wrap">
                {links.map((link) => <Card className={LinkClassHidden} cardName={link} />)}
            </div>
            <ul className="flex flex-col justify-center gap-1 py-5">
                <Link to="" className={LinkClassHidden}>About Us</Link>
                <Link to="" className={LinkClassHidden}>Blogs</Link>
                <Link to="" className={LinkClassHidden}><span className="text-[#000]">Book A Demo</span></Link>
            </ul>
            <button className="bg-[#fff] w-1/3 tracking-wide py-2 px-4 text-sm rounded-full">Get in Touch</button>
        </div>
    )
}