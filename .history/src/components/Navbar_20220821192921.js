import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = (props) => {
    return(
        <header>
            <nav className="flex flex-row items-center justify-between">
                <Link to="/">oris</Link>
                <div className="tracking-wide leading-4 text-sm">
                    <Link to={'/'} className={`text-uppercase ${props.home ? "text-red" : "text-black"}`}>Home</Link>
                </div>
                <div>
                    <Button label="Login" filled={true} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;