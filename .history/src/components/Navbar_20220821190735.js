import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link>Home</Link></li>
                </ul>
            </nav>
            <h1>HELLO WORLD</h1>
        </header>
    )
}

export default Navbar;