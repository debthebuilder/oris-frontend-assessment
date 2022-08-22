import orisLogo from "../assets/logo/oris-logo.svg"
const Logo = (props) => {
    return(
        <div className="inline flex flex-row items-center">
            <img src={orisLogo} alt="Oris Consulting logo" className={`${props.size} inline`} />
          
        </div>
    )
}

export default Logo;