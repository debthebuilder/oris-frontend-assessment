import Button from "../components/Button";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Profile from "../assets/svg/profile.svg";

const JoinOris = () => {
    return(
        <section>
            <Container>
            <h2 className="text-6xl font-light text-right">Launch<Logo size={"w-20"} /> your sales career</h2>
            <div className="flex flex-row items-start">
               
                <div>
                    <img src={Profile} alt="" />
                </div>
                <div className="w-2/6">
                    <span className="block font-medium mt-24"><Logo size="w-7" /> Sales Reps</span>
                    <p className="mt-3 mb-5 leading-7">Elevate your sales experience working for Top Brands. We bring you the jobs, the training and the resources, so you can excel at what you do best. Sales.
                    </p>
                    <p className="font-medium">Learn More.  Earn More.  <br/>
                    Share More.</p>

                    <Button label={"hire top sales reps"} filled={true} icon={true}  />
                </div>
            </div>
            </Container>
        </section>
    )
}

export default JoinOris;