import Button from "../components/Button";
import Logo from "../components/Logo";
import Stat from "../assets/svg/stat.svg";

const Stats = () => {
    return(
        <section className="w-full md:w-5/6 mx-auto">
            <h2 className="text-6xl font-light">Early adopters <Logo /> have reported...</h2>
            <div className="flex flex-row items-start mt-16">
                <div className="w-2/6">
                    <span className="block font-medium mt-24"><Logo /> FMCGs</span>
                    <p className="mt-3 mb-5">Plug into an end-to-end sales ecosystem powered by people, data and trust. Optimize your salesforce across all regions.</p>

                    <Button label={"hire top sales reps"} filled={true} icon={true}  />
                </div>
                <div>
                    <img src={Stat} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Stats;