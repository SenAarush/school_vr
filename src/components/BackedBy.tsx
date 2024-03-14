type BackedByProps = {
    className?: string
}

export default function BackedBy(props: BackedByProps) {
    return (
        <div className={props.className}>
            <p className="text-center text-sm tracking-[5px] uppercase font-medium ">Backed By</p>
            <div className="flex flex-col items-center w-full gap-8 pt-6 sm:flex-row sm:pt-0 sm:px-5">
                <img src="/startup.png" className="object-contain w-3/5 h-24 lg:scale-125 lg:h-14 sm:7" />
                <img src="/microsoft.png" className="object-contain w-3/5 h-16 scale-150 sm:h-7 lg:h-8" />
                <img src="/openai.png" className="object-contain w-3/5 lg:h-7 h-9" />
                <img src="/iit.png" className="object-contain w-3/5 h-14 lg:h-12" />
            </div>
        </div>
    )
}
