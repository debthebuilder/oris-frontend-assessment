import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="py-3 px-5">
            <nav className="flex flex-row items-center justify-between w-full">
                <Link to="/" className="block">
                    <Logo text={true} size={"w-7 md:w-10"} />
                    <span className="text-3xl font-semibold">oris</span>
                </Link>
                <div className="hidden lg:block tracking-wide leading-4 text-sm ">
                    <Link to={'/'} className={`uppercase ${props.home ? "text-red" : "text-black"} mx-4`}>Home</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-4 `}>about us</Link>
                    <Link to={'/jobs'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-4`}>jobs</Link>
                    <Link to={'/faq'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-4 `}>faq</Link>
                    <Link to={'/contact'} className={`uppercase ${props.about ? "text-red" : "text-black"} mx-4`}>contact us</Link>
                </div>
                <div className="hidden lg:block">
                    <Link to={'/login'}>
                        <Button label="login" filled={false} icon={false} />
                    </Link>
                    <Link to={'/login'} className={"ml-5"}>
                        <Button label="sign up" filled={true} icon={false} />
                    </Link>
                </div>
                <div className="lg:hidden">
                    <span onClick={() => {setIsOpen(!isOpen)}} className="hover:text-red text-xl">
                    <i className="fa-solid fa-bars"></i>
                    </span>
                </div>
            </nav>
            <div className={"flex flex-col items-start bg-gray-light"}>
                
                <div className="flex flex-col items-start tracking-wide leading-4 text-sm ">
                    <Link to={'/'} className={`uppercase ${props.home ? "text-red" : "text-black"} ml-2 my-4`}>Home</Link>
                    <Link to={'/about'} className={`uppercase ${props.about ? "text-red" : "text-black"} ml-2 my-4 `}>about us</Link>
                    <Link to={'/jobs'} className={`uppercase ${props.about ? "text-red" : "text-black"} ml-2 my-4`}>jobs</Link>
                    <Link to={'/faq'} className={`uppercase ${props.about ? "text-red" : "text-black"} ml-2 my-4 `}>faq</Link>
                    <Link to={'/contact'} className={`uppercase ${props.about ? "text-red" : "text-black"} ml-2 my-4`}>contact us</Link>
                </div>
                <div className="flex flex-col items-start ml-2 my-2">
                    <Link to={'/login'}>
                        <Button label="login" filled={false} icon={false} />
                    </Link>
                    <Link to={'/login'} className={"my-5"}>
                        <Button label="sign up" filled={true} icon={false} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar;