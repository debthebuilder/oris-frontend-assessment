import orisLogo from "../assets/logo/oris-logo.svg"
const Logo = () => {
    return(
        <div className="flex flex-row items-center">
            <img src={orisLogo} alt="Oris Consulting logo" />
            <span className="text-3xl">oris</span>
        </div>
    )
}

export default Logo;