import Button from "../components/Button";
import Container from "../components/Container";
import Logo from "../components/Logo";
import profile from "../assets/svg/stat.svg";
const JoinOris = () => {
    return(
        <section>
            <Container>
            <h2 className="text-6xl font-light text-right">Launch<Logo size={"w-20"} /> your sales career</h2>
            <div className="flex flex-row items-start">
                <div className="w-2/6">
                    <span className="block font-medium mt-24"><Logo size="w-7" /> FMCGs</span>
                    <p className="mt-3 mb-5 leading-7">Plug into an end-to-end sales ecosystem powered by people, <br/>data and trust. Optimize your salesforce across all regions.</p>

                    <Button label={"hire top sales reps"} filled={true} icon={true}  />
                </div>
                <div>
                    <img src={Stat} alt="" />
                </div>
            </div>
            </Container>
        </section>
    )
}

export default JoinOris;