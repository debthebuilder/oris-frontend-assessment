import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Logo from "../components/Logo";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Profile from "../assets/svg/profile.svg";
import Spacer from "../components/Spacer";

const JoinOris = () => {
    return(
        <section>
            <Container>
                <h2 className="text-3xl md:text-4xl mb-5 lg:text-5xl font-light text-right">Launch <Logo size={" md:w-14 lg:w-20"} /> your sales career</h2>
                <div className="flex flex-col lg:flex-row lg:items-start">
               
                <div>
                    <img src={Profile} alt="" />
                </div>
                <div className="w-full flex flex-col items-start lg:w-2/6">
                    <span className="block text-2xl font-medium mt-8 md:mt-24 lg:mt-36"><Logo size="w-7" /> Sales Reps</span>
                    <p className="mt-3 mb-5 text-lg leading-10">Elevate your sales experience working for Top Brands. We bring you the jobs, the training and the resources, so you can excel at what you do best. Sales.
                    </p>
                    <p className="font-medium mb-5">Learn More.  Earn More.  <br/>
                    Share More.</p>

                    <Button label={"get started"} filled={true} icon={true}  />
                </div>
                </div>
                <Spacer height={"h-24"} />
                <div className="bg-black py-12 px-10 flex flex-col items-center">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl text-center py-5 leading-normal">Join a community of <br/>like-minded sales specialists.</h3>
                    <div className="bg-blue text-black rounded py-2 lg:py-3 px-7 font-medium mt-7 mb-12 lg:mt-10 lg:mb-16 text-center">Get started in 3 easy steps</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-row items-start lg:items-center text-white">
                            <span className="flex items-center justify-center h-12 w-12 border border-red rounded-full">1</span>
                            <span className="ml-2 md:ml-3 lg:ml-5 font-normal text-base">Register and verify<br/> your email address.</span>
                        </div>
                        <div className="flex flex-row items-start lg:items-center text-white">
                            <span className="flex items-center justify-center h-12 w-12 border border-yellow rounded-full">2</span>
                            <span className="ml-2 md:ml-3 lg:ml-5 font-normal text-base">Complete your profile <br/>and assessment</span>
                        </div>
                        <div className="flex flex-row items-start lg:items-center text-white">
                            <span className="flex items-center justify-center h-12 w-12 border border-blue rounded-full">3</span>
                            <span className="ml-2 md:ml-3 lg:ml-5 font-normal text-base">Search and apply <br/>to jobs</span>
                        </div>
                    </div>
                </div>
                <Spacer height={"h-24"} />
                
                <div className="flex flex-col lg:flex-row lg:items-center relative">
                    <div className="absolute -left-20">
                        <span className="flex items-center owl-prev justify-center bg-gray-light w-12 h-12 rounded-full"><i className="fa-solid fa-chevron-left"></i></span>
                    </div>
                    <OwlCarousel 
                        className='relative' 
                        loop margin={10} 
                        items={2} 
                        responsive={{0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 2
                        }}} 
                        nav={true}
                        navContainerClass={"relative"}
                        
                        navText={{}}>
                        
                        <div className='item'>
                            <Card title="Learn More" body={"Access a pool of training resources to elevate your sales knowledge and competence. Track your progress and development with standardized tests. Test your skills in the field selling leading brands and products."} />
                        </div>
                        <div className='item'>
                            <Card title="Earn More" body={"With compensation structures tied to performance, achieving more means earning more. Tap into unlimited earning options as you attain sales targets. Tie your earnings to the fortunes of industry- leading companies."} />
                        </div>
                    
                    
                    </OwlCarousel>
                    <div className="owl-nav">
                            <div className="owl-prev absolute -left-20"> <span className="flex items-center owl-prev justify-center bg-gray-light w-12 h-12 rounded-full"><i className="fa-solid fa-chevron-left"></i></span></div>
                            <div className="owl-next absolute -right-20"><span className="flex items-center justify-center bg-gray-light w-12 h-12 rounded-full"><i className="fa-solid fa-chevron-right"></i></span></div>
                        </div>
                    {/* <div className="absolute -right-20">
                        
                    </div> */}
                </div>
                <Spacer height={"h-24"} />
                <div className="flex justify-center">
                    <Button label={"join oris today"} filled={true} icon={true} />
                </div>
               
            </Container>
        </section>
    )
}

export default JoinOris;