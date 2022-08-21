const Button = (props) => {
    return(
        <button className={`${props.filled ? "bg-red text-white" : "bg-transparent border-2 border-red text-red"} px-5 py-2 text-sm`}><span>{props.label}</span><span className={`${props.icon ? "block" : "hidden"} pl-3`}><i className="fa-solid fa-arrow-right"></i></span></button>
    )
}

export default Button;