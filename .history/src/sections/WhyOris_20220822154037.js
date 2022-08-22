import Button from "../components/Button";

const WhyOris = () => {
    return(
        <section>
            <div className="bg-black pt-24">
                <div className="w-full md:w-5/6 mx-auto">
                    <div className="">
                        <h2 className="text-white font-medium text-4xl leading-relaxed mb-5">Maximize Sales.<br/>Minimize Leakage. <br/>Optimize Control</h2>
                        <Button label={'join oris today'} filled={true} icon={true} />
                    </div>
                    <div className="">
                        <div>
                            <img src={""} alt={""} />
                        </div>
                        <div className="bg-yellow w-72 divide-y divide-dashed py-12">
                            <div className=" flex flex-col text-black pl-10 px-5 py-5">
                                <span className="text-7xl font-medium">53%</span>
                                <span className="text-xl font-normal">Revenue growth</span>
                            </div>
                            <div className=" flex flex-col text-black pl-10 px-5 py-5">
                                <span className="text-7xl font-medium">53%</span>
                                <span className="text-xl font-normal">Revenue growth</span>
                            </div>
                            <div className=" flex flex-col text-black pl-10 px-5 py-5">
                                <span className="text-7xl font-medium">53%</span>
                                <span className="text-xl font-normal">Revenue growth</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyOris;