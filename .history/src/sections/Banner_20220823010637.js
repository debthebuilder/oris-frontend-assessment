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
                    <div className="flex flex-row  absolute lg:right-0">
                        
                        <div className="w-full h-96 relative">
                            <div className="absolute h-full top-0 left-0 z-20 p-1">
                            <img src={Oluchi} alt="Oluchi Chibuzor | Mid-level Sales Rep" className="w-full h-full z-50" />
                            </div>
                            <div className="absolute top-64 w-full z-50">
                            <div className="w-full text-white px-5 py-3 flex flex-row items-center justify-between z-50">
                                <div className="flex flex-col"> 
                                    <span className="font-semibold text-xl">Oluchi <br/>Chibuzor</span>
                                    <span className="text-sm">Mid-level Sales Rep</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-5xl">3</span>
                                    <span className="text-sm">years</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="w-full h-96 relative">
                            <div className="absolute top-0  h-full left-0 z-20 p-1">
                            <img src={Francis} alt="Oluchi Chibuzor | Mid-level Sales Rep" className="w-full h-full z-50" />
                            </div>
                            <div className="absolute top-64 w-full z-50">
                            <div className="w-full text-white px-5 py-3 flex flex-row items-center justify-between z-50">
                                <div className="flex flex-col"> 
                                    <span className="font-semibold text-xl">Francis <br/>Chibuzor</span>
                                    <span className="text-sm">Senior Sales Rep</span>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        <div className="w-full h-96 relative">
                            <div className="absolute top-0 left-0 z-20 p-1 h-full">
                            <img src={Aisha} alt="Aisha Calistus | Mid-level Sales Rep" className="w-full h-full z-50" />
                            </div>
                            <div className="absolute top-64 w-full z-50">
                            <div className="w-full text-white px-5 py-3 flex flex-row items-center justify-between z-50">
                                <div className="flex flex-col"> 
                                    <span className="font-semibold text-xl">Aisha <br/>Calistus</span>
                                    <span className="text-sm">Mid-level Sales Rep</span>
                                </div>
                                
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