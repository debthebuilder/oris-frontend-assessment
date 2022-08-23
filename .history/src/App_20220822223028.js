import Banner from './sections/Banner';
import Footer from './components/Footer';
import JoinOris from './sections/JoinOris';
import Partners from './sections/Partners';
import Spacer from './components/Spacer';
import Stats from './sections/Stats';
import Testimonial from './sections/Testimonial';
import WhyOris from './sections/WhyOris';

function App() {
  return (
    <div>
      <Banner />
      <Spacer height={"lg:h-48"} />
      <WhyOris />
      <Spacer height={"lg:h-48"} />
      <Stats />
      <Spacer height={"lg:h-24"} />
      <Partners />
      <Spacer height={"lg:h-48"} />
      <JoinOris />
      <Spacer height={"h-36"} />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
