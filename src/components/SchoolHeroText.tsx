type SchoolHeroTextProps = {
    className?: string
}

export default function SchoolHeroText(props: SchoolHeroTextProps) {
    return (
        <div>
            <p className={props.className}>
                School <span className="font-light">VR</span>
            </p>
        </div>
    )
}