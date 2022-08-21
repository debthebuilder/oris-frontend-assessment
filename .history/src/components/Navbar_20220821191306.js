import { Link } from "react-router-dom";

const Navbar = (props) => {
    return(
        <header>
            <nav>
                <div className="">
                    <Link to={'/'} className={`text-uppercase`}>Home</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;