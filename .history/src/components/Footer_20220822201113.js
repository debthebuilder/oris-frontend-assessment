import Container from "./Container";
import Logo from "./Logo";
import Avatar3 from "../assets/images/marcus-santos.png";
import Avatar2 from "../assets/images/portrait-expressive-african-american-woman.png";
import Avatar from "../assets/images/pexels-cottonbro.png";

const Footer = () => {
    return(
        <footer className="bg-gray-light">
            <Container>
            <div className="flex flex-row items-center">
                <div className="w-1/2">
                    <div><Logo />oris</div>
                    <p className="leading-7">Oris offers a large network of qualified sales professionals with deep product expertise and ready-to-use business solutions. </p>
                    <div className="flex flex-row items-center">
                        <div className="relative flex flex-row items-center">
                            <div className="w-14 h-14 border rounded-full border-4 border-white">
                                <img src={Avatar} alt="" className="w-full h-full rounded-full"/>
                            </div>
                            <div className="w-14 h-14 border rounded-full border-4 border-white">
                                <img src={Avatar} alt="" className="w-full h-full rounded-full"/>
                            </div>
                            <div className="w-14 h-14 border rounded-full border-4 border-white">
                                <img src={Avatar} alt="" className="w-full h-full rounded-full"/>
                            </div>
                        </div>
                        <div className="flex flex-col uppercase text-black text-opacity-70 text-base">
                            <span>30,000+ <span className="font-semibold">sales reps</span></span>
                            <span>5,000+ companies</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            <div className="py-3 border-t ">
                <span className="block text-sm uppercase font-light text-center">2022 oris - all rights reserved</span>
            </div>
            </Container>
            
        </footer>
    )
}

export default Footer;