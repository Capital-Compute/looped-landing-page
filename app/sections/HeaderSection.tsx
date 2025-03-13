import Image from "next/image";
import { Button } from "../../components/Button";

export const HeaderSection = () => {
  return (
    <div className="max-w-[1520px] w-full text-center mx-auto mt-[40px] md:mt-[70px]">
      <p className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F5B55B] to-[#E4519D]  font-bold leading-[38px] md:leading-[53px]  text-[22px] md:text-[60px]">
        Lost in love’s maze?
      </p>

      <div className="font-bold w-full mx-auto text-[#3D3C3C] md:text-[20px] md:mt-7 mt-3  block text-[14px] max-w-[252px] sm:max-w-[653px] 2xl:max-w-[653px]">
        <p>
          Let Looped be your guide. Like a GPS for your heart, our AI leads you straight to the connection you’ve
          been searching for—less wandering, more wonder.
        </p>
      </div>

      <div className="relative w-full lg:max-w-[1264px]  mx-auto 2xl:max-w-[1672px] hidden md:block md:mt-5   ">
        <Image
          src={"/HeaderWeb.png"}
          width={1630}
          height={798}
          alt=""
          className=""
        />
        <Image
          src={"/RightHearts.png"}
          width={116}
          height={71}
          alt=""
          className=" absolute w-[60px] h-[50px] xl:w-[116px] xl:h-[101px] top-5 -right-3 xl:right-16 xl:top-11 transform animate-heartbeat transition duration-500"
        />
        <Image
          src={"/LeftHearts.png"}
          width={116}
          height={71}
          alt=""
          className=" absolute  right-1/4 translate-x-1/2 top-1/2 2xl:top-2/3 xl:translate-y-1/2 2xl:bottom-0 transform animate-heartbeat transition duration-500"
        />
        <div className="md:absolute -bottom-28 hover:scale-110 duration-300 cursor-pointer left-1/2 transform md:-translate-x-1/2 ">
          <Button />
        </div>
      </div>
      <div className="relative w-full block md:hidden mt-8 px-5 sm:px-0 max-w-[450px] mx-auto">
        <Image
          src={"/LoopedHeaderMobile.png"}
          width={375}
          height={1043}
          alt=""
          className="w-full"
        />
        <div className=" relative mt-10 flex flex-col items-center">
          <Image
            src={"/HearthAnimateImage.png"}
            width={225}
            height={400}
            alt=""
            className=" "
          />
          <Image
            src={"/RightHearts.png"}
            width={72}
            height={44}
            className=" absolute -right-2 xs:right-1/4 top-0 transform animate-heartbeat transition duration-500"
            alt=""
          />
          <Image
            src={"/LeftHearts.png"}
            width={72}
            height={44}
            alt=""
            className=" absolute left-0 transform animate-heartbeat transition duration-500 bottom-0 translate-y-1/3"
          />
  
        </div>
        <div className=" mt-5">

          <Button/>
        </div>   
      </div>
    </div>
  );
};
