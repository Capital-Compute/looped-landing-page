import Image from "next/image";
import { DownloadAppButton } from "../../components/DownloadAppButton";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import { Button } from "../../components/Button";

export const TechnologySection = () => {
  return (
    <div className=" xl:flex mt-16 sm:mt-[150px] max-w-[1400px] 2xl:max-w-[1580px] 2xl:mt-[250px] xl:pl-[2.5rem] 2xl:pl-[5rem] w-full mx-auto lg:justify-between px-0 xl:px-0 flex sm:items-center flex-col xl:flex-row">
      <div className=" max-w-[771px]">
        <div className=" flex items-center justify-between max-w-[600px] 2xl:max-w-[760px]">
          <div className=" -translate-x-10 animate-spin duration-1000 hidden md:block">
            <Image src={"/AAEmoji.png"} alt={""} width={193} height={177} />
          </div>

          <div className=" -translate-x-10 animate-spin duration-1000 block md:hidden">
            <Image src={"/AAEmoji.png"} alt={""} width={74} height={68} />
          </div>

          <div className=" hidden md:block">
            <Image src={"/BoomEmoji.png"} alt={""} width={193} height={177} />
          </div>

          <div className=" block md:hidden">
            <Image src={"/BoomEmoji.png"} alt={""} width={85} height={71} />
          </div>
        </div>
        <p className=" text-black sm:pl-0 font-black sm:text-[30px] lg:text-[30px] xl:text-[40px] text-[20px] pl-0 uppercase hidden 2xl:block">
          Ready to feel the spark? ⚡
        </p>
        <p className=" text-black sm:pl-0 font-black sm:text-[30px] lg:text-[30px] xl:text-[40px] text-[20px] pl-0 uppercase block xl:text-nowrap 2xl:hidden">
          Ready to feel the spark? 
        </p>
        <p className=" pl-0 sm:pl-0  mt-[12px] md:mt-[26px] text-[18px] lg:text-[30px]  xl:max-w-[549px] sm:text-[20px] 2xl:text-[30px] max-w-[310px] md:max-w-[450px]  lg:max-w-[794px] font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
          <span className=" text-black">⚡</span> Let AI ignite real connections that aren’t just for show. Swipe into your future
          <span className=" text-black">🔮</span>
        </p>
        <p className=" pl-0 sm:pl-0 text-[#313131] text-[14px] md:text-[20px] max-w-[325px] md:max-w-[511px] mt-[12px] lg:mt-[10px]">
          Looped ignites real connections by understanding your heart through
          your conversations. It’s like AI-powered magic that deepens bonds,
          builds trust, and helps you glow together. ✨
        </p>
        
         
        <div className=" duration-300 cursor-pointer max-w-[310px]  sm:max-w-[500px] mt-5  xl:mt-[70px] ">
          <Button />
        </div>
        
      </div>

      <div className=" mt-10 sm:mt-0 ">
        <Image src={"/ReadyBackground.png"} width={844} height={921} alt="" className=" w-full sm:max-w-[550px] lg:max-w-[844px]" />
      </div>
    </div>
  );
};
