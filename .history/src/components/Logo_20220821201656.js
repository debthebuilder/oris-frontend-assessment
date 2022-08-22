import orisLogo from "../assets/logo/oris-logo.svg"
const Logo = (props) => {
    return(
        <div className="flex flex-row items-center">
            <img src={orisLogo} alt="Oris Consulting logo" className={`${props.size}`} />
            <span className={`${props.text ? "inline-block text-xl md:text-3xl font-semibold" : "hidden "}`}>oris</span>
        </div>
    )
}

export default Logo;