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
            <OwlCarousel className='owl-theme' loop margin={10} items={1} nav navClass={'owl-prev'}>
    <div class='item'>
    <Container>
                <div className="flex flex-row items-start relative">
                    <div className="absolute -left-20 top-32">
                        <span className="flex items-center justify-center bg-gray-light bg-opacity-10 w-12 h-12 rounded-full owl-prev"><i className="fa-solid fa-chevron-left"></i></span>
                    </div>
                    <div>
                        <div className="border border-4 border-white lg:w-64 lg:h-64 rounded-full">
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
                    <div className="absolute -right-20 top-32">
                        <span className="flex items-center justify-center bg-gray-light bg-opacity-10 w-12 h-12 rounded-full owl-next"><i className="fa-solid fa-chevron-right"></i></span>
                    </div>
                </div>
            </Container> 
    </div>
    
</OwlCarousel>;
            
        </section>
    )
}

export default Testimonial;