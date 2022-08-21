import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
            <nav>
                <div>
                    <li><Link to={'/'}>Home</Link></li>
                </div>
            </nav>
            <h1>HELLO WORLD</h1>
        </header>
    )
}

export default Navbar;