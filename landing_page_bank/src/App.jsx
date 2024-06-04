import style from './style';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTAc from './components/CTAc';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
        
        <div className={`${style.paddingX} ${style.paddingX}`}>
          <div className={`${style.boxWidth}`}>
            <NavBar />
          </div>
        </div>

        <div className={`bg-primary ${style.flexStart}`}>
          <div className={`${style.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
          <div className={`${style.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients /> 
            <CTAc />
            <Footer />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
