const Button = (props) => {
    return(
        <button className={`${props.filled ? "bg-red text-white" : "bg-transparent border-2 border-red text-red"} px-5 py-1 text-sm`}><span>{props.label}</span><span className={`${props.icon ? "" : null} pl-`}><i className="fa-solid fa-arrow-right"></i></span></button>
    )
}

export default Button;