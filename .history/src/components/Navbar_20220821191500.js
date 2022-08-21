import { Link } from "react-router-dom";

const Navbar = (props) => {
    return(
        <header>
            <nav>
                <div className="tracking-wider">
                    <Link to={'/'} className={`text-uppercase ${props.home ? "text-red" : }`}>Home</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;