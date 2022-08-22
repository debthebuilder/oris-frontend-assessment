import Naomi from "../assets/testimonial/naomiDoe.png";

const Testimonial = () => {
    return(
        <section className="bg-black py-12">
            <div>
                <div className="rounded-full borde">
                    <img src={Naomi} alt={"Naomi Doe"} />
                
                <div>
                    <blockquote className="text-white">Oris has completely transformed our recruitment process by fast-tracking and automating everything.</blockquote>
                    <div>
                        <div>
                            <span className="text-red">Naomi Doe</span>
                            <span className="text-white">Recruitment Lead, GB Foods</span>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;