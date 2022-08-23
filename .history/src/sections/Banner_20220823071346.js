import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Aisha from "../assets/team/AishaCalistus.webp";
import Oluchi from "../assets/team/OluchiChibuzor.webp";
import Francis from "../assets/team/FrancisAyooluwa.webp";
import Logo from "../components/Logo";
import Container from "../components/Container";

const Banner = () => {
    return(
        <section className="bg-gray-light h-auto pb-10 relative">
            <Navbar />
            <Container>
                <div className="py-20">
                    <h1 className="font-normal text-black text-left lg:text-center leading-10 md:leading-loose text-xl md:text-3xl lg:leading-relaxed lg:text-5xl ">Join a community of <Logo size={"w-8 md:w-12 lg:w-20"} /> <span className="font-semibold">salespeople helping brands reach their customers</span>  quickly, efficiently and reliably.</h1>
                </div>
                <div className="flex mt-96 lg:mt-0 flex-row py-5">
                    <div className="w-full lg:w-2/6">
                        <p className="text-base text-left lg:text-left leading-loose font-normal text-black mb-7">Plug into an end-to-end sales ecosystem powered by people, data and trust. Optimize your salesforce across all regions.</p>
                        <div className="flex items-center  justify-start">
                            <Button label={'get started'} filled={true} icon={true} />
                        </div>
                       
                    </div>
                    
                    
                </div>
            </Container>
            
            <div className="absolute bottom-80 md:bottom-64 left-0 md:left-44 lg:-bottom-32 h-96 lg:-right-96 px-5">
                
                <div className="w-full h-full lg:w-4/6 flex justify-end relative overflow-x-hidden">
                    <div className="relative img-gradient w-full">
                        <div className="w-56 h-full z-0">
                            <img src={Oluchi} alt="Oluchi Chibuzor | Mid-level Sales Rep" className="h-full" />
                        </div>
                        <div className="absolute top-64 w-full z-50">
                            <div className="w-full text-white px-3 py-3 flex flex-row items-center justify-between z-50">
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
                    
                    <div className="hiddensm:inline relative img-gradient">
                        <div className="w-32 h-full z-0 p-1">
                            <img src={Francis} alt="Oluchi Chibuzor | Mid-level Sales Rep" className="w-full h-full" />
                        </div>
                        <div className="absolute top-64 w-full z-50">
                            <div className="w-full text-white px-3 py-3 flex flex-row items-center justify-between z-50">
                                <div className="flex flex-col"> 
                                    <span className="font-semibold text-xl">Francis <br/>Ayoola</span>
                                    <span className="text-xs">Senior Sales Rep</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="hidden md:inline relative img-gradient">
                        <div className="w-32 h-full z-0 p-1">
                            <img src={Aisha} alt="Aisha Calistus | Sales Assistant" className="w-full h-full" />
                        </div>
                        <div className="absolute top-64 w-full z-50">
                            <div className="w-full text-white px-3 py-3 flex flex-row items-center justify-between z-50">
                                <div className="flex flex-col"> 
                                    <span className="font-semibold text-xl">Aisha <br/>Calistus</span>
                                    <span className="text-xs">Sales Assistant</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                   
                    
                </div>
            
            </div>
            
                                
        </section>
        
    )
}

export default Banner;