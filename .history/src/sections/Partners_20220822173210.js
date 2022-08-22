import Container from "../components/Container";
import gino from "../assets/brands/gino.png";
import ginoMax from "../assets/brands/ginoMax.png";
import jago from "../assets/brands/jago.png";
import bama from "../assets/brands/bama.png";

const Partners = () => {
    return(
        <section>
            <Container>
            <h2 className="text-2xl text-center font-medium">We are trusted by Top Companies</h2>
            
        </Container>
            <div className="bg-gray-light flex flex-row">
                <div className="w-full md:w-5/6 mx-auto flex flex-row items-center">
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
            </div>
        </section>
       
    )
}

export default Partners;