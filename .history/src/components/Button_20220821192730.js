const Button = (props) => {
    return(
        <button className={`outline`}><span>{props.label}</span><span className={`${props.icon ? "" : null}`}><i className="fa-solid fa-arrow-right"></i></span></button>
    )
}