import Image from "next/image";

export const FeaturesOverview = () => {
  return (
    <div className=" max-w-[1920px] mx-auto w-full text-center lg:mt-[151px] mt-[0px] md:px-0 2xl:px-0">
      <p className=" uppercase sm:text-[25px] lg:text-[40px] text-[20px] font-bold px-5 md:px-0">
        Features Overview
      </p>
      <p className=" mt-3 lg:text-[30px] px-4 md:px-0 text-[18px]  font-bold  max-w-[260px] sm:text-[20px] sm:max-w-[450px] text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
        Features Overview – The Tools You Need for a Healthy Relationship
      </p>

      <Image
        src={"/FeaturesWeb.png"}
        width={1870}
        height={1100}
        alt=""
        className=" mx-auto hidden sm:block"
      />

      <div className=" xl:flex-row lg:hidden flex-col-reverse sm:hidden  items-center xl:items-start max-w-[1572px] justify-between w-full mx-auto px-0 md:px-0 xl:mt-20">
        <Image
          src={"/PrivacyMobile.png"}
          width={901}
          height={2330}
          alt=""
          className=" mt-[40px] mx-auto px-5"
        />
      </div>
    </div>
  );
};
