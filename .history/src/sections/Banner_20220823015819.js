import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Aisha from "../assets/team/AishaCalistus.png";
import Oluchi from "../assets/team/OluchiChibuzor.png";
import Francis from "../assets/team/FrancisAyooluwa.png";
import Logo from "../components/Logo";
import Container from "../components/Container";

const Banner = () => {
    return(
        <section className="bg-gray-light pb-10 relative overflow-x-hidden">
            <Navbar />
            <Container>
                <div className="py-20">
                    <h1 className="font-normal text-black text-center md:leading-loose text-xl md:text-3xl lg:leading-relaxed lg:text-5xl ">Join a community of <Logo size={"w-8 md:w-12 lg:w-20"} /> <span className="font-semibold">salespeople helping brands reach their customers</span>  quickly, efficiently and reliably.</h1>
                </div>
                <div className="flex flex-col-reverse lg:flex-row py-5">
                    <div className="w-full lg:w-2/6">
                        <p className="text-base text-center lg:text-left leading-loose font-normal text-black mb-7">Plug into an end-to-end sales ecosystem powered by people, data and trust. Optimize your salesforce across all regions.</p>
                        <div className="flex items-center justify-center lg:justify-start">
                            <Button label={'get started'} filled={true} icon={true} />
                        </div>
                       
                    </div>
                    <div className="w-full  lg:w-4/6 flex justify-end">
                        <div className="mb-20 w-full absolute -bottom-32">
                            <div className="flex"></div>
                        </div>
                        
                 
                    </div>
                    
                </div>
            </Container>
        </section>
        
    )
}

export default Banner;