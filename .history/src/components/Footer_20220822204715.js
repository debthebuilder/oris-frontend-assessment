import Container from "./Container";

import Logo from "./Logo";
import Avatar3 from "../assets/images/marcus-santos.png";
import Avatar2 from "../assets/images/portrait-expressive-african-american-woman.png";
import Avatar from "../assets/images/pexels-cottonbro.png";
import MenuItem from "./MenuItem";

const Footer = () => {
    return(
        <footer className="bg-gray-light">
            <Container>
            <div className="flex flex-row items-center py-10">
                <div className="w-1/2">
                    <div className="font-semibold text-3xl"><Logo />oris</div>
                    <p className="leading-7 mt-5 mb-7 w-4/6 text-sm">Oris offers a large network of qualified sales professionals with deep product expertise and ready-to-use business solutions. </p>
                    <div className="flex flex-row items-center">
                        <div className="relative flex flex-row items-center mr-28 pl-3">
                            <div className="absolute left-16 w-14 h-14 border rounded-full border-4 border-white z-50">
                                <img src={Avatar} alt="" className="w-full h-full rounded-full"/>
                            </div>
                            <div className="absolute left-8 z-40 w-14 h-14 border rounded-full border-4 border-white">
                                <img src={Avatar2} alt="" className="w-full h-full rounded-full"/>
                            </div>
                            <div className="absolute -left-1 w-14 h-14 border rounded-full border-4 border-white">
                                <img src={Avatar3} alt="" className="w-full h-full rounded-full"/>
                            </div>
                        </div>
                        <div className="flex flex-col uppercase text-black text-opacity-70 text-sm">
                            <span>30,000+ <span className="font-semibold">sales reps</span></span>
                            <span>5,000+ <span className="font-semibold">companies</span></span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 grid grid-cols-3 gap-5">
                    <div className="flex flex-col">
                        <MenuItem label={"Home"} link={"/"} />
                        <MenuItem label={"About us"} link={"#"} />
                        <MenuItem label={"Jobs"} link={"#"} />
                        <MenuItem label={"Contact us"} link={"#"} />
                    </div>
                    <div className="flex flex-col">
                        <MenuItem label={"Privacy Policy"} link={"/"} />
                        <MenuItem label={"Terms & Conditions"} link={"#"} />
                        <MenuItem label={"FAQs"} link={"#"} />
                        <MenuItem label={"Sign up"} link={"#"} />
                    </div>
                    <div className="flex flex-col">
                        <MenuItem label={"Linked"} link={"/"} />
                        <MenuItem label={"About us"} link={"#"} />
                        <MenuItem label={"Jobs"} link={"#"} />
                        <MenuItem label={"Contact us"} link={"#"} />
                    </div>
                </div>
            </div>
            
            </Container>
            <div className="py-5 border-t ">
                <span className="block text-xs tracking-widest uppercase font-light text-center text-black text-opacity-60 ">2022 oris - all rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;