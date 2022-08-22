import Button from "../components/Button";
import Card from "../components/Card";
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
                <div className="bg-black py-12 px-10 flex flex-col items-center">
                    <h3 className="text-white text-4xl text-center py-5">Join a community of <br/>like-minded sales specialists.</h3>
                    <div className="bg-blue text-black rounded py-3 px-7 font-medium mt-10 mb-16">Get started in 3 easy steps</div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-row items-center text-white">
                            <span className="flex items-center justify-center h-12 w-12 border border-red rounded-full">1</span>
                            <span className="ml-5 font-normal text-base">Register and verify<br/> your email address.</span>
                        </div>
                        <div className="flex flex-row items-center text-white">
                            <span className="flex items-center justify-center h-12 w-12 border border-yellow rounded-full">2</span>
                            <span className="ml-5 font-normal text-base">Complete your profile <br/>and assessment</span>
                        </div>
                        <div className="flex flex-row items-center text-white">
                            <span className="flex items-center justify-center h-12 w-12 border border-blue rounded-full">3</span>
                            <span className="ml-5 font-normal text-base">Search and apply <br/>to jobs</span>
                        </div>
                    </div>
                </div>
                <Spacer />
                <div className="flex flex-row items-center relative">
                    <div className="absolute -left-20">
                        <span className="flex items-center justify-center bg-gray-light w-12 h-12 rounded-full"><i className="fa-solid fa-chevron-left"></i></span>
                    </div>
                    <Card title="Learn More" body={"Access a pool of training resources to elevate your sales knowledge and competence. Track your progress and development with standardized tests. Test your skills in the field selling leading brands and products."} />
                    <span className="w-10"></span>
                    <Card title="Earn More" body={"With compensation structures tied to performance, achieving more means earning more. Tap into unlimited earning options as you attain sales targets. Tie your earnings to the fortunes of industry- leading companies."} />
                </div>
            </Container>
        </section>
    )
}

export default JoinOris;