const Button = (props) => {
    return(
        <button className={`$props`}><span>{props.label}</span><span className={`${props.icon ? "" : null}`}><i className="fa-solid fa-arrow-right"></i></span></button>
    )
}

export default Button;