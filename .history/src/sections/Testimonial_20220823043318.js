import Container from "../components/Container";
import Naomi from "../assets/testimonial/naomiDoe.png";
import RingText from "../assets/testimonial/ringText.svg";
import Signature from "../assets/testimonial/NaomiSign.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    return(
        <section className="bg-black py-16"> 
        <Container>
        <OwlCarousel className='relative test' loop margin={10} items={1}  nav={true} dragClass={false}>
                <div class='item'>
                    
                        <div className="flex flex-col lg:flex-row lg:items-start ">
                            <div className="flex justify-center">
                                <div className="border border-4 border-white w-24 h-24 md:w-32 md:h-32 lg:w-64 lg:h-64 rounded-full">
                                    <img src={Naomi} alt={"Naomi Doe"} className={"w-full h-full rounded-full"} />
                                </div>
                            </div>
                        
                            <div className="lg:ml-10 px-3 w-full lg:w-4/6">
                                <blockquote className="text-white text-center lg:text-left text-xl md:text-2xl lg:text-4xl leading-normal py-5 lg:py-0">Oris has completely transformed our recruitment process by fast-tracking and automating everything.</blockquote>
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-red text-sm md:text-base">Naomi Doe</span>
                                        <span className="text-white text-xs md:text-base">Recruitment Lead, GB Foods</span>
                                    </div>
                                    <div className="w-24">
                                        <img src={Signature} alt={""} />
                                    </div>
                                    <div className="w-24">
                                        <img src={RingText} alt={""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </div>
                
            </OwlCarousel>
        </Container>
            
            
        </section>
    )
}

export default Testimonial;