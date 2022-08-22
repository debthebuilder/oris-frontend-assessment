import Button from "../components/Button";

const WhyOris = () => {
    return(
        <section>
            <div className="bg-black">
                <div >

                </div>
                <div className="">
                    <h2 className="text-white font-medium text-4xl">Maximize Sales.<br/>Minimize Leakage. <br/>Optimize Control</h2>
                    <Button label={'join oris today'} filled={true} icon={true} />
                </div>
                <div>
                    <div>
                        <img src={""} alt={""} />
                    </div>
                    <div>
                        <div className="border-b border-dashed border-gray-light">
                            <span>53%</span>
                            <span>Revenue growth</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyOris;