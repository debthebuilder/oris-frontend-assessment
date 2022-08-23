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
                <div className="py-10">
                    <h1 className="font-normal text-black text-center text-xl md:text-4xl leading-loose lg:text-5xl ">Join a community of <Logo size={"w-8"} /> <span className="font-semibold">salespeople helping brands reach their customers</span>  quickly, efficiently and reliably.</h1>
                </div>
                <div className="flex flex-col lg:flex-row py-5">
                    <div className="lg:w-2/6">
                        <p className="text-base text-center lg:text-left leading-loose font-normal text-black mb-7">Plug into an end-to-end sales ecosystem powered by people, data and trust. Optimize your salesforce across all regions.</p>
                        <div className="flex items-center justify-center lg:justify-start">
                            <Button label={'get started'} filled={true} icon={true} />
                        </div>
                       
                    </div>
                    <div className="flex">
                        <div className="" >
                            
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