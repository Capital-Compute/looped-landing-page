import Image from "next/image";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import { Button } from "../../components/Button";

export const SettleSection = () => {
  return (
    <div className=" px-0 md:px-10 xl:px-0 sm:mt-[180px] max-w-[1150px] xl:max-w-[1200px] 2xl:max-w-[1520px] w-full mx-auto lg:flex lg:flex-row flex flex-col items-center mt-[45px] lg:mt-[120px]">
      <div className=" max-w-[500px] 2xl:max-w-[822px] lg:mt-10 relative">
        <p className=" text-black font-bold text-[20px] lg:text-[30px] 2xl:text-[40px] md:text-[22px] ">
          TIRED OF ORDINARY MATCHES?
        </p>
        <p className="  mt-[12px] md:mt-[12px] text-[18px] lg:text-[30px] 2xl:text-[30px] max-w-[694px] font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
          With AI leading the way, it’s never been easier to find love that just
          clicks.
          <span className=" text-black">💘</span>
        </p>
        <p className=" text-[#313131] text-[14px] lg:text-[18px] 2xl:text-[23px] max-w-[800px] mt-[12px] md:mt-[2px] xl:mt-[15px] 2xl:mt-[4px]">
          Step into a brighter dating experience with Looped. Our AI goes beyond
          the usual swipes, connecting you with matches that truly stand
          out.Leave the ordinary behind—find someone who shines.
        </p>
        <div className=" duration-300 cursor-pointer max-w-[310px] mx-auto  sm:max-w-[500px] mt-4 xl:mt-[70px]   ">
          <Button />
        </div>
      </div>

      <div className=" mt-7 md:mt-0 z-50">
        <Image src={"/SettleImg.png"} alt="" width={974} height={972} className=" xl:max-w-[700px] 2xl:max-w-[974px]" />
      </div>
    </div>
  );
};
