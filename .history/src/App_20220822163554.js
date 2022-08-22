import Banner from './sections/Banner';
import Footer from './components/Footer';
import JoinOris from './sections/JoinOris';

import Spacer from './components/Spacer';
import Stats from './sections/Stats';


import Testimonial from './sections/Testimonial';
import WhyOris from './sections/WhyOris';

function App() {
  return (
    <div>
      <Banner />
      <Spacer />
      <WhyOris />
      <Spacer />
      <Stats />
      <Spacer />
      <Partners />
      <Spacer />
      <JoinOris />
      <Spacer />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
