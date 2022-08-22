import Container from "../components/Container";
import Naomi from "../assets/testimonial/naomiDoe.png";
import RingText from "../assets/testimonial/ringText.svg";
import Signature from "../assets/testimonial/NaomiSign.png";


const Testimonial = () => {
    return(
        <section className="bg-black py-12">
            <Container>
                <div className="flex flex-row items-start relative">
                    <div className="absolute -left-20">
                        <span className="flex items-center justify-center bg-gray-light bg-opacity-10 w-12 h-12 rounded-full"><i className="fa-solid fa-chevron-left"></i></span>
                    </div>
                    <div>
                        <div className="border border-4 border-white w-64 h-64 rounded-full">
                            <img src={Naomi} alt={"Naomi Doe"} className={"w-full h-full rounded-full"} />
                        </div>
                    </div>
                   
                    <div className="ml-10 w-4/6">
                        <blockquote className="text-white text-4xl leading-normal">Oris has completely transformed our recruitment process by fast-tracking and automating everything.</blockquote>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-red">Naomi Doe</span>
                                <span className="text-white">Recruitment Lead, GB Foods</span>
                            </div>
                            <div>
                                <img src={Signature} alt={""} />
                            </div>
                            <div>
                                <img src={RingText} alt={""} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute -right-20 top-3">
                        <span className="flex items-center justify-center bg-gray-light bg-opacity-10 w-12 h-12 rounded-full"><i className="fa-solid fa-chevron-right"></i></span>
                    </div>
                </div>
            </Container>
            
        </section>
    )
}

export default Testimonial;