import Container from "../components/Container";
import gino from "../assets/brands/gino.png";
import ginoMax from "../assets/brands/ginoMax.png";
import jago from "../assets/brands/jago.png";
import bama from "../assets/brands/bama.png";

const Partners = () => {
    return(
        <section>
            <div className="bg-gray-light flex flex-row">
                <div>
                    <img src={bama} alt={""} />
                </div>
                <div>
                    <img src={gino} alt={""} />
                </div>
                <div>
                    <img src={ginoMax} alt={""} />
                </div>
                <div>
                    <img src={jago} alt={""} />
                </div>
                
            </div>
        </section>
       
    )
}

export default Partners;