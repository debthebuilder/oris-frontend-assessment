import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
            <nav>
                <Link to="/">oris</Link>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;