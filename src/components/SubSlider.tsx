type SubSliderProps = {
    className: string
    selectedState?: string
}

export default function SubSlider(props: SubSliderProps) {
    const width: string = "w-10"
    return (
        <div className={props.className}>
            <img src="/dna_white.png" className={width} />
            <img src="/flask_white.png" className={width} />
            <img src="/atom_white.png" className={width} />
            <img src="/planet_white.png" className={width} />
            <img src="/compass_white.png" className={width} />
        </div>
    )
}