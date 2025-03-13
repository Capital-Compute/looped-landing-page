import Image from "next/image";
import {WhatsappIcon} from "../icons/WhatsappIcon";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import WhatsappIcon2 from "../icons/WhatsappIcon2";
import {Button} from "../../components/Button";

export const ConnectDeeperSection = () => {
  return (
    <div className="mt-[43.11px] max-w-[1300px] 2xl:max-w-[1600px] w-full mx-auto md:mt-[80px] lg:mt-[159px] text-center">
      <p className=" font-bold text-black md:text-[40px] text-[20px] xl:max-w-[694px] w-full mx-auto">
      CONNECT DEEPER. 💞 LET AI LINK 
YOU TO YOUR PERFECT WIBE🔗
      </p>
      <p
        className="mt-[5px] lg:max-w-[394px] text-center mx-auto text-transparent bg-clip-text font-bold bg-gradient-to-r to-[#F686DC] from-[#FFCB78] md:text-[30px] text-[20px]">
       No more basic convos, just 
       real connections.
      </p>

      <div className=" hidden xl:flex relative xl:max-h-[850px]  ">
        <Image
          src={"/ConnectWeb.png"}
          width={1932}
          height={909}
          alt=""
          className="  2x:-translate-y-20 mx-auto"
        />

        <div
          className=" duration-300 cursor-pointer  max-w-[500px] mt-4   absolute bottom-1/4 left-1/2 -translate-x-1/2 ">
          <Button/>
        </div>
      </div>

      <div className=" flex xl:hidden justify-center mt-[23px] relative">
        {/*<Image src={"/LoveImageMobile1.png"} width={600} height={700} alt="" />*/}
        <div className="w-full flex flex-col items-center gap-[31px] mb-[20.71px]">

          <div className={"w-full max-w-[335px] relative"}>
            <Image src={"/real-relation-connect.png"} width={108} height={88} alt={""}
                   className="absolute top-1/2 -translate-y-1/2 left-0"/>
            <div className="w-[calc(100%_-_46px)] ml-auto px-[33.38px] py-[18px] bg-[#FFFFFF] rounded-[12.08px]">
              <p className={"text-[#000000] font-bold text-base text-right"}>Real relationships</p>
            </div>
          </div>
          <div className={"w-full max-w-[335px] relative"}>
            <Image src={"/connection-connect.png"} width={108} height={88} alt={""}
                   className="absolute top-1/2 -translate-y-1/2 left-0"/>
            <div className="w-[calc(100%_-_46px)] ml-auto px-[33.38px] py-[18px] bg-[#FFFFFF] rounded-[12.08px]">
              <p className={"text-[#000000] font-bold text-base text-right"}>Deep connections</p>
            </div>
          </div>
          <div className={"w-full max-w-[335px] relative"}>
            <div className="w-[calc(100%_-_46px)] mr-auto px-[33.38px] py-[18px] bg-[#FFFFFF] rounded-[12.08px]">
              <p className={"text-[#000000] font-bold text-base text-left"}>Deep connections</p>
            </div>
            <Image src={"/small-talk-connect.png"} width={108} height={88} alt={""}
                   className="absolute top-1/2 -translate-y-1/2 right-0"/>
          </div>
          <div className={"w-full max-w-[335px] relative"}>
            <div className="w-[calc(100%_-_46px)] mr-auto px-[33.38px] py-[18px] bg-[#FFFFFF] rounded-[12.08px]">
              <p className={"text-[#000000] font-bold text-base text-left"}>Connect with purpose</p>
            </div>
            <Image src={"/purpose-connect.png"} width={108} height={88} alt={""}
                   className="absolute top-1/2 -translate-y-1/2 right-0"/>
          </div>
        </div>
      </div>

<div className=" max-w-[310px] mx-auto md:hidden mt-3">

        <Button />
</div>
    </div>
  );
};
