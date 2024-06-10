import { discount, robot } from "../assets";
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
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
      </div>

      <div className={`flex-1 flex ${style.flexCenter} my-10 md:my-0 relative`}>
        <img src={robot} className="w-[100%] h-[100%] relative z-[5]" alt="robot"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      
      <div className={`ss:hidden ${style.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
