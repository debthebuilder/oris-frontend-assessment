const Button = (props) => {
    return(
        <button className={`${props.filled ? "bg-red" : "bg-transparent"}`}><span>{props.label}</span><span className={`${props.icon ? "" : null}`}><i className="fa-solid fa-arrow-right"></i></span></button>
    )
}

export default Button;