import orisLogo from "../assets/logo/oris-logo.svg"
const Logo = (props) => {
    return(
    
            <img src={orisLogo} alt="Oris Consulting logo" className={`${props.size} inline`} />
          
        </div>
    )
}

export default Logo;