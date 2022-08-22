import orisLogo from "../assets/logo/oris-logo.svg"
const Logo = (props) => {
    return(
        <div className="inline-block flex flex-row items-center">
            <img src={orisLogo} alt="Oris Consulting logo" className={`${props.size} inline`} />
            <span className={`${props.text ? "inline text-xl md:text-3xl font-semibold" : "hidden "}`}>oris</span>
        </div>
    )
}

export default Logo;