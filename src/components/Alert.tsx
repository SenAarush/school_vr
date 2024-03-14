import { IoIosClose } from "react-icons/io"

type AlertProps = {
    className?: string
}


export default function Alert(props: AlertProps) {
    return (
        <div className={props.className}>
            <div className="hover:scale-110 transition duration-[0.4s] h-6 w-6 absolute top-[-10px] right-[-5px] bg-[white] rounded-full flex items-center justify-center">
                <IoIosClose className="text-2xl text-secondary" />
            </div>
            <p className="tracking-widest text-center uppercase ">Early Adopter</p>
            <button type="submit" className="mt-3 rounded-lg bg-[#ecc243] w-full py-2 tracking-tight  text-[#292d32] hover:scale-105 font-semibold text-center lg:hover:scale-110 lg:transition lg:duration-[400ms] text-lg">
                Offer
            </button>
            <p className="mt-2 text-sm text-center transition hover:scale-105 duration-[400ms]">Click Here to avail</p>
        </div>
    )
}