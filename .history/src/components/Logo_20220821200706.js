import orisLogo from "../assets/logo/oris-logo.svg"
const Logo = (props) => {
    return(
        <div className="flex flex-row items-center">
            <img src={orisLogo} alt="Oris Consulting logo" className={`${props.logoSize}`} />
            <span className="text-3xl font-semibold">oris</span>
        </div>
    )
}

export default Logo;