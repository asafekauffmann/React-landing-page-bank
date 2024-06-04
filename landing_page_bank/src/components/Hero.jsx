import { discount } from "../assets";
import style from "../style";
import GetStarted from "./GetStarted";

function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${style.paddingY}`}>
      <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10pc] mb-2'>
          <img 
            src={discount} 
            className="w-[32px] h-[32px]"
            alt="discount" 
          />
          <p className={`${style.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount For {" "}
            <span className="text-white">1 MOUNTH </span>
            ACCOUNT
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" /> {" "}
            <span className="text-gradient">Generation</span>
            <br className="sm:block hidden" /> {" "}
            Payment Method.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
