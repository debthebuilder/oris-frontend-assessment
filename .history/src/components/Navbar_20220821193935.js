import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = (props) => {
    return(
        <header>
            <nav className="flex flex-row items-center justify-between w-full ">
                <Link to="/">oris</Link>
                <div className="tracking-wide leading-4 text-sm ">
                    <Link to={'/'} className={`uppercase ${props.home ? "text-red" : "text-black"} mx-2`}>Home</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-2 `}>about us</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-2`}>jobs</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-2 `}>faq</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-2`}>contact us</Link>
                </div>
                <div>
                    <Link to={'/login'}>
                        <Button label="login" filled={false} icon={false} />
                    </Link>
                    <Link to={'/login'} className={"ml-5"}>
                        <Button label="sign up" filled={true} icon={false} />
                    </Link>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar;