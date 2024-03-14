import { Link } from "react-router-dom";
import Detail from "./Detail";

type FooterProps = {
    className?: string
}
// sm:hidden


export default function Footer(props: FooterProps) {
    const H1class = "mb-4 font-bold text-lg tracking-wider uppercase text-[#fff]";
    const ULclass = "flex flex-col sm:w-1/4 w-1/2 py-5 text-[#b8b8b8]";
    const Liclass = "py-[2px]";
    const List = [
        { title: "Products", items: ["School VR", "Rebuild", "Gameverse", "Engine"] },
        { title: "Resources", items: ["Blogs", "News & Articles", "Upcoming"] },
        { title: "Company", items: ["Contact", "About Us", "Careers", "Help Center"] }
    ]

    // text-[#4D5157]

    return (
        <footer className={props.className}>
            <div className="flex-col sm:flex-row px-10 pt-32 w-full bg-gradient-to-r from-[#292d32] to-[#4D5157]">
                {/* List Item container + Other Links */}
                <div className="md:flex md:justify-between">
                    <div className="flex flex-wrap mb-10 md:w-3/5 md:justify-between sm:-3/4 sm:flex-row">
                        {List.map((section, index) => (
                            <ul key={index} className={ULclass}>
                                <h1 className={H1class}>{section.title}</h1>
                                {section.items.map((item, i) => (
                                    <Link key={i} to="" className={Liclass}>{item}</Link>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <Detail className="flex flex-col gap-4 py-3 mb-12 text-[#ffffffe3] font-extralight" />
                </div>

                {/* Links Container */}
                <div className="min-w-full min-h-[1px] bg-secondary"></div>
                {/* divider */}
                <p className="pt-4 pb-8 font-semibold text-center text-secondary">Copyright &copy; 2022 - AONIX</p>
            </div>
        </footer >
    )
}