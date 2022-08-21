const Button = (props) => {
    return(
        <button className={`${props.filled ? "bg-red text-white" : "bg-transparent  text-red hover:bg-red hover:text-white"} capitalize px-5 py-2 border-2 border-red text-sm font-semibold`}><span>{props.label}</span><span className={`${props.icon ? "inline-block" : "hidden"} pl-3`}><i className="fa-solid fa-arrow-right"></i></span></button>
    )
}

export default Button;