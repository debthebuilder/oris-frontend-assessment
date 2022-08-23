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
                    
                    <div className="mb-10">
                        <h2 className="text-white font-medium text-5xl mb-5">Maximize Sales.<br/>Minimize Leakage. <br/>Optimize Control</h2>
                        <Button label={'join oris today'} filled={true} icon={true} />
                    </div>
                    <div className="absolute left-0 w-full">
                        <div className="flex flex-col lg:flex-row lg:items-end">
                            <div className="w-full">
                                <img src={image} alt={"Man seated using a macbook."} />
                            </div>
                            <div className="bg-yellow lg:w-80 divide-y divide-dashed divided-black divided-opacitty-50 py-12">
                                <div className=" flex flex-col text-black pl-10 px-5 py-5">
                                    <span className="text-2xl md:text-4xl lg:text-7xl font-medium">53%</span>
                                    <span className="text-xl font-normal">Revenue growth</span>
                                </div>
                                <div className=" flex flex-col text-black pl-10 px-5 py-10 lg:py-5">
                                    <span className="text-2xl md:text-4xl lg:text-7xl font-medium">60%</span>
                                    <span className="text-xl font-normal">Reduction in lost sales and theft</span>
                                </div>
                                <div className=" flex flex-col text-black pl-10 px-5 py-5">
                                    <span className="text-2xl md:text-4xl lg:text-7xl font-medium">10x</span>
                                    <span className="text-xl font-normal">Reduction in staff turnover</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </div>
            <Container>
            <div className="lg:mt-80">
                <div className="text-center text-black py-10">
                    <h3 className="text-2xl text-center font-medium">Why sell with <span className="font-semibold"><Logo size="w-8" />oris</span>?</h3>
                    <p className="py-5 leading-7">Oris focuses on improving your business with the four pillars of elite salesforces.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                   <Card title={"Recruit"} body={"Hire, verify and test competent, motivated salespeople that hit the ground running."} />
                   <Card title={"Onboard"} body={"Train, engage and deploy a salesforce across your target market in double time."} />
                   <Card title={"Reward"} body={"Mobilize and incentivize your salesforce with custom compensation structures."} />
                   <Card title={"Perform"} body={"Track performance through granular sales data and uncover insights for strategic direction."} />
                    
                </div>
            </div>
            </Container>
            
            
        </section>
    )
}

export default WhyOris;