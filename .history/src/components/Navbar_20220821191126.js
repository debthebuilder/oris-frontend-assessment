import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
            <nav>
                <div>
                    <Link to={'/'} className>Home</Link>
                </div>
            </nav>
            <h1>HELLO WORLD</h1>
        </header>
    )
}

export default Navbar;