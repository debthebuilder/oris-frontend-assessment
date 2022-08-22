import Logo from "./Logo";

const Footer = () => {
    return(
        <footer>
            <div>
                <div>
                    <div><Logo />oris</div>
                    <p >Oris offers a large network of qualified sales professionals with deep product expertise and ready-to-use business solutions. </p>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            <div className="py-3 border-t ">
                <span className="block text-sm uppercase font-light text-center">2022 oris - all rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;