const Button = (props) => {
    return(
        <button className={``}><span>{props.label}</span><span className={`${props.icon}`}><i className="fa-solid fa-arrow-right"></i></span></button>
    )
}