
type CardProps = {
    className?: string,
    cardName?: string,
    upcoming?: boolean
}

export default function Card(props: CardProps){
    return (
        // <div className={props.className}>
        <div className="rounded-xl w-[100px] min-h-[150px] bg-[#000]/30 backdrop-blur-md flex flex-col items-center justify-center gap-3">
            <div className="min-h-20 w-3/4 bg-secondary"></div>
            <p>{props.cardName}</p>
        </div>
    )
}