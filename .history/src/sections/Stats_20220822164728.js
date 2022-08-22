import Button from "../components/Button";
import Logo from "../components/Logo";

const Stats = () => {
    return(
        <section className="w-full md:w-5/6 mx-auto">
            <h2>Early adopters <Logo /> have reported...</h2>
            <div className="flex flex-row">
                <div>
                    <span className="block font-medium"><Logo /> FMCGs</span>
                    <p>Plug into an end-to-end sales ecosystem powered by people, data and trust. Optimize your salesforce across all regions.</p>

                    <Button label={"hire top sales reps"} filled={true} icon={true}  />
                </div>
                <div>
                    <img s
                </div>
            </div>
        </section>
    )
}

export default Stats;