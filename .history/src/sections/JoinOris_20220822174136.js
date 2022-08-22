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
            </div>
            </Container>
        </section>
    )
}

export default JoinOris;