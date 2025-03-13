import Image from "next/image";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import { Button } from "../../components/Button";

export const SoulMate = () => {
  return (
    <div className=" px-0 md:px-0 xl:max-w-[1300px] 2xl:max-w-[1520px] xl:justify-between w-full mx-auto lg:flex lg:flex-row flex lg:px-[50px] 2xl:px-0  xl:gap-[45px] flex-col items-center mt-[56px] md:mt-[100px]">
      <div className=" max-w-[700px] 2xl:max-w-[889px] w-full lg:mt-10 relative">
        <p className=" text-black font-bold lg:text-[30px] 2xl:text-[40px] uppercase text-[20px] ">
          Build a bridge to your soulmate 🌉
        </p>
        <p className="  mt-[12px]  md:mt-[20px] text-[18px] lg:text-[30px] 2xl:text-[30px] max-w-[283px] sm:max-w-[751px] font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
          AI transforms every message into a step closer to love that clicks,
          connects, and lasts. <span className=" text-black">💘</span>
        </p>
        <p className=" text-[#313131] text-[14px] lg:text-[18px] 2xl:text-[20px] max-w-[285px] sm:max-w-[759px] mt-[12px] md:mt-[28px]">
          Finding true love can feel out of reach, but Looped makes it simple.
          Our AI builds a seamless connection between you and the one who truly
          fits your heart.No more searching aimlessly—Looped takes you from
          where you are to where you want to be: in a relationship that just
          clicks.
        </p>

        <div className=" duration-300 cursor-pointer max-w-[310px]  sm:max-w-[500px] mt-4  xl:mt-[70px] ">
          <Button />
        </div>
      </div>
      <div className=" mt-3 md:mt-0">
        <Image src={"/CrossImg.png"} alt="" width={410} height={972} className=" 2xl:translate-y-5" />
      </div>
    </div>
  );
};
