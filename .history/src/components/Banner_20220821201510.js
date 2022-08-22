import Logo from "./Logo";

const Banner = () => {
    return(
        <div>
            <div className="w-full md:w-5/6 mx-auto py-5">
                <h1 className="font-normal text-black text-center text-2xl leading-10 md:text-4xl md:leading-relaxed">Join a community of <Logo /> <span className="font-semibold">salespeople <br/>helping brands reach their customers</span> <br /> quickly, efficiently and reliably.</h1>
            </div>
        </div>
    )
}

export default Banner;