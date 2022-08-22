import Button from "../components/Button";

const WhyOris = () => {
    return(
        <section>
            <div className="bg-black">
                <div className="w-2/6">
                    <h2>Maximize Sales.<br/>Minimize Leakage. <br/>Optimize Control</h2>
                    <Button label={'get started'} filled={true} icon={true} />
                </div>
            </div>
        </section>
    )
}

export default WhyOris;