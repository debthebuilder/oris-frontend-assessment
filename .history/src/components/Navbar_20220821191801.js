import { Link } from "react-router-dom";

const Navbar = (props) => {
    return(
        <header>
            <nav className="flex">
                <div className="tracking-wide leading-4 text-sm">
                    <Link to={'/'} className={`text-uppercase ${props.home ? "text-red" : "text-black"}`}>Home</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;