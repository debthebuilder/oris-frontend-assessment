import orisLogo from "../assets/logo/oris-logo.svg"
const Logo = () => {
    return(
        <div className="flex flex-row">
            <img src={orisLogo} alt="Oris Consulting logo" />
            <span>oris</span>
        </div>
    )
}

export default Logo;