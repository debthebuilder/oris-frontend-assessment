import orisLogo from "../assets/logo/oris-logo.svg"
const Logo = () => {
    return(
        <div className="flex flex-row items-center">
            <img src={orisLogo} alt="Oris Consulting logo" className="w-8" />
            <span className="text-3xl font-semibold">oris</span>
        </div>
    )
}

export default Logo;