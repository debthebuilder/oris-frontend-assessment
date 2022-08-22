import Button from "../components/Button";
import Logo from "../components/Logo";

const Stats = () => {
    return(
        <section className="w-full md:w-5/6 mx-auto">
            <h2 className="text-6xl font-light">Early adopters <Logo /> have reported...</h2>
            <div className="flex flex-row mt-16">
                <div>
                    <span className="block font-medium"><Logo /> FMCGs</span>
                    <p>Plug into an end-to-end sales ecosystem powered by people, data and trust. Optimize your salesforce across all regions.</p>

                    <Button label={"hire top sales reps"} filled={true} icon={true}  />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Stats;