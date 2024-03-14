type ChemVerseProps = {
    className?: string
}

export default function ChemVerse(props: ChemVerseProps){
    return(
        <div className={props.className}>Chemverse Page</div>
    )
}