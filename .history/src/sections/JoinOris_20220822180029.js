import Button from "../components/Button";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Profile from "../assets/svg/profile.svg";
import Spacer from "../components/Spacer";

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
                    <span className="block font-medium mt-36"><Logo size="w-7" /> Sales Reps</span>
                    <p className="mt-3 mb-5 leading-7">Elevate your sales experience working for Top Brands. We bring you the jobs, the training and the resources, so you can excel at what you do best. Sales.
                    </p>
                    <p className="font-medium mb-5">Learn More.  Earn More.  <br/>
                    Share More.</p>

                    <Button label={"get started"} filled={true} icon={true}  />
                </div>
                </div>
                <Spacer />
                <div className="bg-black py-10 px-10 flex flex-col items-center">
                    <h3 className="text-white text-4xl text-center py-5">Join a community of <br/>like-minded sales specialists.</h3>
                    <div className="bg-blue text-black">Get started in 3 easy steps</div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-row items-center text-white">
                            <span className="flex items-center justify-center h-12 w-12 border border-red rounded-full">1</span>
                            <span className="ml-1 font-normal text-base">Register and verify<br/> your email address.</span>
                        </div>
                        <div className="flex flex-row items-center text-white">
                            <span className="flex items-center justify-center h-12 w-12 border border-yellow rounded-full">2</span>
                            <span className="ml-1 font-normal text-base">Complete your profile <br/>and assessment</span>
                        </div>
                        <div className="flex flex-row items-center text-white">
                            <span className="flex items-center justify-center h-12 w-12 border border-blue rounded-full">3</span>
                            <span className="ml-1 font-normal text-base">Search and apply <br/>to jobs</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default JoinOris;