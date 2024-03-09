type BackedByProps = {
    className?: string
}

export default function BackedBy(props: BackedByProps) {
    return (
        <div className={props.className}>
            <p className="text-center text-[10px] py-1 tracking-[5px] uppercase font-medium ">Backed By</p>
            <div className="flex justify-around overflow-hidden px-5 w-full h-1/5">

                <img src="/startup.png" alt="" className=" scale-95 md:scale-150 max-h-10" />
                <img src="/openai.png" alt="" className="scale-50 md:scale-50 max-h-10" />
                <img src="/microsoft.png" alt="" className="scale-50 md:scale-75 max-h-10" />
                <img src="/iit.png" alt="" className="scale-50 md:scale-80 max-h-10" />

            </div>
        </div>
    )
}
