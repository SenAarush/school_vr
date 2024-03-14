type BioVerseProps = {
    className?: string
}

export default function BioVerse(props: BioVerseProps){
    return(
        <div className={props.className}>Bioverse Page</div>
    )
}