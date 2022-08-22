import orisLogo from "../assets/logo/oris-logo.svg"
const Logo = (props) => {
    return(
        <span className="flex flex-row items-center inline">
            <img src={orisLogo} alt="Oris Consulting logo" className={`${props.size}`} />
            <span className={`${props.text ? "inline-block text-xl md:text-3xl font-semibold" : "hidden "}`}>oris</span>
        </span>
    )
}

export default Logo;