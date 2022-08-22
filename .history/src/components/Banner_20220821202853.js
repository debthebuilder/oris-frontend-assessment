import Button from "./Button";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Banner = () => {
    return(
        <section className="bg-gray-light pb-10">
            <Navbar />
            <div className="w-full md:w-5/6 mx-auto">
                <div className=" py-10">
                    <h1 className="font-normal text-black text-center text-2xl leading-10 md:text-4xl md:leading-relaxed">Join a community of <span><Logo /></span> <span className="font-semibold">salespeople <br/>helping brands reach their customers</span> <br /> quickly, efficiently and reliably.</h1>
                </div>
                <div>
                    <div className="w-2/6">
                        <p className="text-base leading-loose font-normal text-black mb-7">Plug into an end-to-end sales ecosystem powered by people, data and trust. Optimize your salesforce across all regions.</p>
                        <Button label={'get started'} filled={true} icon={true} />
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Banner;