import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import image from "../assets/images/pexels-ono-kosuki.png";
import Logo from "../components/Logo";
const WhyOris = () => {
    return(
        <section>
            <div className="bg-black pt-24 pb-80  relative">
                <Container>
                    
                    <div className="">
                        <h2 className="text-white font-medium text-5xl mb-5">Maximize Sales.<br/>Minimize Leakage. <br/>Optimize Control</h2>
                        <Button label={'join oris today'} filled={true} icon={true} />
                    </div>
                    <div className="absolute">
                        <div className="flex items-end">
                            <div>
                                <img src={image} alt={"Man seated using a macbook."} />
                            </div>
                            <div className="bg-yellow w-80 divide-y divide-dashed py-12">
                                <div className=" flex flex-col text-black pl-10 px-5 py-5">
                                    <span className="text-7xl font-medium">53%</span>
                                    <span className="text-xl font-normal">Revenue growth</span>
                                </div>
                                <div className=" flex flex-col text-black pl-10 px-5 py-5">
                                    <span className="text-7xl font-medium">60%</span>
                                    <span className="text-xl font-normal">Revenue growth</span>
                                </div>
                                <div className=" flex flex-col text-black pl-10 px-5 py-5">
                                    <span className="text-7xl font-medium">10x</span>
                                    <span className="text-xl font-normal">Revenue growth</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </div>
            <Container>

            </Container>
            
            
        </section>
    )
}

export default WhyOris;