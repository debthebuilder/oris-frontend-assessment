import Naomi from "../assets/testimonial/naomiDoe.png";
import Container from "../components/Container";

const Testimonial = () => {
    return(
        <section className="bg-black py-12">
            <Container>
        <div className="flex flex-row items-center">
            <div className="border border-4 border-white w-64 h-64 rounded-full">
                <img src={Naomi} alt={"Naomi Doe"} className={"w-full h-full rounded-full"} />
            </div>
            <div>
                <blockquote className="text-white">Oris has completely transformed our recruitment process by fast-tracking and automating everything.</blockquote>
                <div>
                    <div>
                        <span className="text-red">Naomi Doe</span>
                        <span className="text-white">Recruitment Lead, GB Foods</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
            </Container>
            
        </section>
    )
}

export default Testimonial;