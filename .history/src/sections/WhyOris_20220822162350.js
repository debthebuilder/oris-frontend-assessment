import Button from "../components/Button";
import image from "../assets/images/pexels-ono-kosuki.png";
import orisLogo from "../assets/logo/oris-logo.svg";
import Card from "../components/Card";
const WhyOris = () => {
    return(
        <section>
            <div className="bg-black pt-24 pb-80  relative">
                <div className="w-full md:w-5/6 mx-auto">
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
                    
                </div>
            </div>
            <div className="w-full md:w-5/6 mx-auto mt-80">
                <div className="text-center text-black py-10">
                    <h3 className="text-2xl text-center font-medium">Why sell with <span className="font-semibold"><img className="inline w-8" src={orisLogo} alt={"Oris Consulting Logo"} /> oris</span>?</h3>
                    <p className="py-5 leading-7">Oris focuses on improving your business<br/> with the four pillars of elite salesforces.</p>
                </div>
                <div className="grid grid-cols-4 gap-4">
                   <Card title={"Recruit"} body={"Hire, verify and test competent, motivated salespeople that hit the ground running."} />
                   <Card title={"Onboard"} body={"Hire, verify and test competent, motivated salespeople that hit the ground running."} />
                   <Card title={"Reward"} body={"Hire, verify and test competent, motivated salespeople that hit the ground running."} />
                   <Card title={"Recruit"} body={"Hire, verify and test competent, motivated salespeople that hit the ground running."} />
                    
                </div>
            </div>
            
        </section>
    )
}

export default WhyOris;