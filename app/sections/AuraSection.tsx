import Image from "next/image";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import { Button } from "../../components/Button";

export const AuraSection = () => {
  return (
    <div className=" px-0 md:px-0 max-w-[1300px] sm:mt-[50px] 2xl:max-w-[1520px] w-full mx-auto lg:flex xl:justify-between lg:flex-row flex  xl:gap-[45px] flex-col-reverse items-center mt-[60px] md:mt-[50px] lg:mt-0">
      <div className=" mt-7 md:mt-0">
        <Image src={"/AuraImg.png"} alt="" width={579} height={972} />
      </div>

      <div className=" max-w-[741px] lg:mt-10 relative">
        <p className=" text-black font-bold uppercase lg:text-[30px] 2xl:text-[40px] text-[20px] ">
          It’s not just about looks, it’s about the aura 💫
        </p>
        <p className="  mt-[12px] md:mt-[20px] max-w-[261px] text-[18px] lg:text-[30px] 2xl:text-[30px] sm:max-w-[663px] font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
          Find someone whose vibe hits different with AI-powered
          matching! <span className=" text-black">✨</span>
        </p>
        <p className=" text-[#313131] text-[14px] lg:text-[18px] 2xl:text-[20px] max-w-[298px] sm:max-w-[607px] mt-[12px] md:mt-[10px]">
        Looks fade, but the right vibe lasts forever. Looped goes beyond 
appearances, using AI to match you with someone whose energy 
and essence truly align with yours.Discover connections that feel 
right—where the chemistry is natural, and the vibe hits different.
        </p>

        <div className=" duration-300 cursor-pointer max-w-[310px]   sm:max-w-[500px] mt-4  xl:mt-[70px] ">
          <Button />
        </div>
      </div>
    </div>
  );
};
