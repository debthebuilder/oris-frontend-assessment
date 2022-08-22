import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
    return(
        <footer>
            <Container>
            <div className="flex flex-row items-center">
                <div>
                    <div><Logo />oris</div>
                    <p className="leading-7">Oris offers a large network of qualified sales professionals with deep product expertise and ready-to-use business solutions. </p>
                    <div>
                        <div></div>
                        <div>
                            <span></span>
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