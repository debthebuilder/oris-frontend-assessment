import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="py-3 px-5">
            <nav className="flex flex-row items-center justify-between w-full">
                <Link to="/" className="block">oris</Link>
                <div className="hidden md:block tracking-wide leading-4 text-sm ">
                    <Link to={'/'} className={`uppercase ${props.home ? "text-red" : "text-black"} mx-4`}>Home</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-4 `}>about us</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-4`}>jobs</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-4 `}>faq</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-4`}>contact us</Link>
                </div>
                <div className="hidden md:block">
                    <Link to={'/login'}>
                        <Button label="login" filled={false} icon={false} />
                    </Link>
                    <Link to={'/login'} className={"ml-5"}>
                        <Button label="sign up" filled={true} icon={false} />
                    </Link>
                </div>
                <div className="md:hidden">
                    <span className="hover:text-red" >
                    <i className="fa-solid fa-bars"></i>
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;