import { MdAlternateEmail, MdLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";

type DetailProps = {
    className?: string
}

export default function Detail(props: DetailProps) {
    return (
        <div className={props.className}>
            <ul className="flex flex-col py-3 font-medium gap-7">
                <li className="flex items-center ">
                    <MdAlternateEmail className="mr-5 text-3xl " />
                    <span className="text-xl">Admin@Aonix.in</span>
                </li>
                <li className="flex items-center">
                    <MdLocalPhone className="mr-5 text-3xl " />
                    <span className="text-xl">+91 9508382971</span>
                </li>
                <li className="flex items-center">
                    <BiBuildings className="mr-5 text-3xl " />
                    <span className="text-xl">Arunoday, Sihodih</span>
                </li>
                <li className="flex items-center">
                    <MdLocationOn className="mr-5 text-3xl " />
                    <span className="text-xl">Giridh, Jharkhand 815301</span>
                </li>
            </ul>
        </div>
    )
}