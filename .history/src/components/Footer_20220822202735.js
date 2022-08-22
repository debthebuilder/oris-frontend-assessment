import Container from "./Container";
import Logo from "./Logo";
import Avatar3 from "../assets/images/marcus-santos.png";
import Avatar2 from "../assets/images/portrait-expressive-african-american-woman.png";
import Avatar from "../assets/images/pexels-cottonbro.png";

const Footer = () => {
    return(
        <footer className="bg-gray-light">
            <Container>
            <div className="flex flex-row items-center py-10">
                <div className="w-1/2">
                    <div><Logo />oris</div>
                    <p className="leading-7 mt-5 mb-7 w-4/6 text-sm">Oris offers a large network of qualified sales professionals with deep product expertise and ready-to-use business solutions. </p>
                    <div className="flex flex-row items-center">
                        <div className="relative flex flex-row items-center mr-28 pl-1">
                            <div className="absolute -right-28 w-14 h-14 border rounded-full border-4 border-white z-50">
                                <img src={Avatar} alt="" className="w-full h-full rounded-full"/>
                            </div>
                            <div className="absolute left-6 z-40 w-14 h-14 border rounded-full border-4 border-white">
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