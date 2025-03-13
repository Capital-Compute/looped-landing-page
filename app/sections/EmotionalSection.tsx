import Image from "next/image";
import { DownloadAppButton } from "../../components/DownloadAppButton";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import { Button } from "../../components/Button";

export const EmotionalSection = () => {
  return (
    <div className=" px-0 md:px-0 max-w-[1720px] w-full mx-auto lg:flex  lg:flex-row flex flex-col-reverse  lg:gap-10 xl:gap-20 2xl:gap-10  2xl:justify-between items-center mt-[96px] md:mt-[120px] lg:px-14">
      <div className=" mt-7 md:mt-0 z-20 px-0 sm:px-5">
        <Image
          src={"/EmotionalBackground.png"}
          alt=""
          width={974}
          height={972}
          className=" -translate-x-5 sm:-translate-x-0 2xl:max-w-[652px] sm:max-w-[550px] sm:mt-8 md:mt-0 lg:max-w-[500px] xxl:max-w-[650px] 2xl:translate-y-10"
        />
      </div>

      <div className=" max-w-[500px] 2xl:max-w-[710px]  relative lg:-ml-[35px] px-5 sm:px-0">
        <div className=" flex items-center justify-between ">
          <div className=" absolute  -translate-x-2 sm:-left-3 -top-16 sm:-top-14 sm:hidden hidden w-[124px] h-[62px]">
            <Image src={"/omg.png"} alt={""} width={84} height={62} />
          </div>
          <div className=" lg:absolute right-0 2xl:-right-0 -top-40 3xl:-right-20 3xl:top-0 hidden xl:block">
            <Image src={"/Boom2.png"} alt={""} width={193} height={177} />
          </div>
          <div className=" absolute right-0  -top-14 block md:hidden">
            <Image src={"/Boom2.png"} alt={""} width={74} height={62} />
          </div>
        </div>
        <div className="text-black font-bold 2xl:leading-[52px] xl:text-[28px] 2xl:text-[40px] text-[20px] uppercase 3xl:mt-[75px]">
          <span>
            The future of dating is <br /> here
          </span>
          <Image
            src={"/sunset.png"}
            alt={"s"}
            width={40}
            height={40}
            className={"inline mb-3 ml-2"}
          />
        </div>
        <p className="   lg:mt-[20px] text-[18px] xl:text-[28px] 2xl:text-[30px] max-w-[894px] font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
          And trust me, it’s way brighter with <br />
          AI! No more dead-ends, just endless possibilities.{" "}
          <span className=" text-black">🌟</span>
        </p>
        <p className=" text-[#313131] text-[14px] xl:text-[20px] 2xl:text-[20px] max-w-[500px] mt-[17px] ">
          Gain real-time insights into your conversations to connect deeper,
          communicate better, and avoid conflict. Let AI guide you toward a more
          fulfilling relationship experience.
        </p>
        <div className=" duration-300 cursor-pointer max-w-[317px]  sm:max-w-[500px] mt-4   ">
          <Button />
        </div>
      </div>
    </div>
  );
};
