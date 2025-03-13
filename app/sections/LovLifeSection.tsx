import Image from "next/image";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import { Button } from "../../components/Button";

export const LoveLifeSection = () => {
  return (
    <div className=" px-0 md:px-0 max-w-[1250px] 2xl:max-w-[1620px] w-full mx-auto xl:justify-between  lg:flex xl:flex-row flex lg:gap-[80px]  xxl:gap-[25px] flex-col-reverse mt-[0px] md:mt-[0px]">
      <div className=" relative max-w-[752px] w-full hidden xl:block 2xl:mt-20 lg:scale-75 xxl:scale-100">
        <video
          src="LoveVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className=" object-cover xl:w-[260px] 2xl:w-[288px] rounded-[10px] rounded-b-full h-[230px] 2xl:h-[274px] translate-x-[240px] 2xl:translate-x-[290px] xl:translate-y-[43px] 2xl:translate-y-[50px]"
        ></video>

        <div className=" mt-7 md:mt-0 absolute left-0 top-1 w-[302px] xl:w-[700px] 2xl:w-[819px] max-h-[672px] overflow-hidden">
          <Image src={"/LoveImg.png"} alt="" width={909} height={972} />
        </div>
      </div>

      <div className=" relative  w-full  xl:hidden flex  justify-center mt-6">
        <Image src={"/LoveMobile.png"} width={291} height={238} alt="" />
      </div>

      <div className=" sm:max-w-[690px] xl:max-w-[530px] 2xl:max-w-[801px] w-full lg:mt-10 relative sm:mx-auto lg:mx-0">
        <p className=" text-bold font-bold lg:text-[30px] 2xl:text-[40px] text-[20px] ">
        GLOW UP YOUR JURNEY TO LOVE✨
        </p>
        <p className="  mt-[12px] md:mt-[20px] text-[18px] lg:text-[30px] 2xl:text-[30px] max-w-[322px] sm:max-w-[716px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
          AI illuminates the perfect match just for you. Shine brighter with
          Looped. <span className=" text-black">💡💖</span>
        </p>
        <p className=" text-[#313131] text-[14px] lg:text-[18px] 2xl:text-[20px] max-w-[334px] sm:max-w-[759px] mt-[12px] md:mt-[10px]">
          Step into the spotlight with Looped, where AI lights the way to your
          perfect match. No more guesswork—just bright, meaningful connections
          that make your love life shine.
     
          Let AI highlight the one who’s right for you and turn ordinary dating
          into something extraordinary. It’s time to glow up and find your
          match.
        </p>
         <div className=" duration-300 cursor-pointer max-w-[310px]  sm:max-w-[500px] mt-5 sm:mt-4 xl:mt-[70px]  ">
                              <Button />
                            </div>
      </div>
    </div>
  );
};
