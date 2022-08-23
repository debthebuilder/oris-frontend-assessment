import Button from "../components/Button";
import Logo from "../components/Logo";
import Stat from "../assets/svg/stat.svg";
import Container from "../components/Container";

const Stats = () => {
    return(
        <Container>
            <h2 className="text-3xl md:text-4xl  lg:text-5xl font-light">Early adopters <Logo size={"w-12 md:w-16 lg:w-20 mb-5"} /> have reported...</h2>
            <div className="flex flex-col-reverse lg:flex-row items-start">
                <div className="w-full lg:w-2/6">
                    <span className="block font-medium mt-7 md: lg:mt-24"><Logo size="w-7" /> FMCGs</span>
                    <p className="mt-3 mb-5 leading-7">Plug into an end-to-end sales ecosystem powered by people, <br/>data and trust. Optimize your salesforce across all regions.</p>

                    <Button label={"hire top sales reps"} filled={true} icon={true}  />
                </div>
                <div>
                    <img src={Stat} alt="" />
                </div>
            </div>
        </Container>
    )
}

export default Stats;