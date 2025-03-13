import Image from "next/image";
import { ScientificResearcSection } from "./ScientificResearhSection";
import { ScientificMobile } from "./ScientificMobile";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import { Button } from "../../components/Button";

export const FindThePath = () => {
  return (
    <div className=" bg-no-repeat px-0 sm:px-0 ">
      <div className="  md:px-0 max-w-[1150px]  2xl:max-w-[1580px] 2xl:justify-between w-full mx-auto lg:flex px-0 sm:px-0 lg:flex-row flex gap-[80px] sm:gap-0 lg:gap-[75px] flex-col items-center mt-[26px] xl:mt-10 2xl:mt-[180px] md:mt-[180px]">
        <div className=" mt-7 md:mt-0 px-10 sm:px-0">
          <Image
            src={"/ImageMobiles.png"}
            alt=""
            width={870}
            height={972}
            className=" sm:max-w-[620px]"
          />
        </div>

        <div className="max-w-[701px] lg:mt-10 relative px-0 sm:px-0 sm:mt-10">
          <div className=" flex items-center justify-between"></div>
          <p className=" text-black font-bold lg:text-[25px] 2xl:text-[40px] text-[20px] max-w-[258px] sm:max-w-[400px] xl:text-nowrap  lg:max-w-[258px] 2xl:text-nowrap">
            DISCOVER YOUR WAY TO “THE ONE”
          </p>
          <p className="  mt-[10px] md:mt-[20px] text-[18px] max-w-[262px] lg:text-[25px] 2xl:text-[30px] sm:max-w-[550px] lg:max-w-[739px] font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
            AI is your guide, making sure your journey to love is as smooth as
            possible. <span className=" text-black">✨💖</span>
          </p>
          <p className=" text-[#313131] text-[14px] lg:text-[18px] 2xl:text-[23px] max-w-[273px] sm:max-w-[800px] mt-[12px] lg:mt-[10px] 2xl:mt-[12px]">
            Love isn’t a puzzle to solve—it’s a path to walk. With Looped, AI
            clears the way to authentic relationships. No detours, just
            meaningful connections that grow stronger with every step. Trust the
            guide that knows you best.
          </p>

          <div className=" duration-300 cursor-pointer max-w-[310px]  sm:max-w-[520px] mt-4 2xl:mt-[70px]   ">
            <Button />
          </div>
        </div>
      </div>
      <ScientificResearcSection />
    </div>
  );
};
