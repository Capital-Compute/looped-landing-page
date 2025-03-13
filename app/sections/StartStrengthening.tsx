import Image from "next/image";
import { DownloadAppButton } from "../../components/DownloadAppButton";

export const StartStrengthening = () => {
  return (
    <div className="  w-full  mt-[40px] md:mt-[142px] relative">
      <p className=" text-center text-[22px] md:text-[40px] font-extrabold mx-auto  max-w-[996px] text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
        Start Strengthening Your Relationship Today.
      </p>
      <p className=" text-[#313131] mt-[14px] md:mt-[17px] mx-auto max-w-[710px] text-center text-[14px] md:text-[24px]">
        Don’t miss out on transforming your connections. Join thousands of users
        who are enhancing their relationships with AI-powered insights—start
        today!
      </p>

      <div className=" relative">
        <Image src={'/DownloadApp.png'} width={2000} height={866} alt="" className=" -translate-y-20 relative hidden lg:block"/>
        <Image src={'/DownloadAppMobile.png'} width={1000} height={1054} alt="" className=" -translate-y-20 relative  block lg:hidden"/>

      </div>
      <div className="absolute bottom-10 w-full max-w-[488px] left-1/2 transform -translate-x-1/2 2xl:-translate-y-48 hidden md:block">
          <DownloadAppButton/>
        </div>

        <div className="absolute bottom-10 w-full max-w-[488px] left-1/2 transform -translate-x-1/2 -translate-y-48  block md:hidden">
          <DownloadAppButton  />
        </div>

    </div>
  );
};
