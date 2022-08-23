import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Aisha from "../assets/team/AishaCalistus.png";
import Oluchi from "../assets/team/OluchiChibuzor.png";
import Francis from "../assets/team/FrancisAyooluwa.png";
import Logo from "../components/Logo";
import Container from "../components/Container";

const Banner = () => {
    return(
        <section className="bg-gray-light pb-10">
            <Navbar />
            <Container>
                <div className="py-20">
                    <h1 className="font-normal text-black text-center text-xl md:text-4xl lg:leading-relaxed lg:text-5xl ">Join a community of <Logo size={"w-8 md:w-12 lg:w-20"} /> <span className="font-semibold">salespeople helping brands reach their customers</span>  quickly, efficiently and reliably.</h1>
                </div>
                <div className="flex flex-col-reverse lg:flex-row py-5">
                    <div className="lg:w-2/6">
                        <p className="text-base text-center lg:text-left leading-loose font-normal text-black mb-7">Plug into an end-to-end sales ecosystem powered by people, data and trust. Optimize your salesforce across all regions.</p>
                        <div className="flex items-center justify-center lg:justify-start">
                            <Button label={'get started'} filled={true} icon={true} />
                        </div>
                       
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="" >
                            <div className="w-full relative">
                                <img src={Oluchi} alt="Oluchi Chibuzor | Mid-level Sales Rep" className="z-50" />
                                <div className="absolute bottom-0">
                                <div className="flex flex-row items-center justify-between z-50">
                                    <div>
                                        <h2>Oluchi Chibuzor</h2>
                                        <span>Mid-level Sales Rep</span>
                                    </div>
                                    <div>
                                        <span>3</span>
                                        <span>years</span>
                                    </div>
                                </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full z-30">
                                <div className="w-full h-full bg-gradient-to-b from-gray-light to-black flex justify-center"></div>
                            </div>
                            </div>
                            
                            
                            
                        </div>
                        <div className="relative w-96 bg-red mb-5">
                            <div className="absolute z-0">
                                <img src={Oluchi} alt="Oluchi Chibuzor | Mid-level Sales Rep" className="w-1/2" />
                            </div>
                            <div className="flex flex-row items-center justify-between z-50">
                                <div>
                                    <h2>Oluchi Chibuzor</h2>
                                    <span>Mid-level Sales Rep</span>
                                </div>
                                <div>
                                    <span>3</span>
                                    <span>years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        
    )
}

export default Banner;