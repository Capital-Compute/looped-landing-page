import Image from "next/image";

export const SuccessCard = ({ name, year, text, videoSrc,emojy }) => {
  return (
    <div className="bg-white relative min-h-[325px] md:min-h-[572px] rounded-[14px] md:rounded-[33px] shadow-lg px-[8px] lg:px-[18px] z-30 w-full max-w-[184px] md:max-w-[320px] py-[10px]">
      {/* Header Section */}
      <div className="flex gap-2 w-[320px] items-center">
        <div className="bg-black w-[65px] gap-2 text-white text-[7px] md:text-[18px] font-bold h-[20px] items-center justify-center flex md:w-[130px] md:h-10 rounded-[16px] md:rounded-[37px]">
          <p className="text-[10px] md:text-[18px]">{name}</p>
          <p>{year}</p>
        </div>
        <Image
          src={"/HearthImg.png"}
          width={80}
          height={51}
          alt="Heart Icon"
          className=" md:w-[80px] w-[29px]"
        />
      </div>

      {/* Text Section */}
      <p className=" text-[12px] md:text-[14px] mt-1 md:mt-[30px] max-w-[284px] text-left">
        {text}
      </p>

      {/* Video Section */}
      <Image
        className=" w-[165px] h-[170px] md:w-[285px]  z-30 md:h-[344px] object-cover rounded-[10px] md:rounded-[24px] absolute bottom-3 md:bottom-[15px]"
        src={videoSrc}
        width={280}
        height={344}
        alt={""}
      ></Image>
      <Image src={emojy} width={85} height={85} alt="" className=" z-40 absolute right-0 translate-y-5 sm:translate-y-0 sm:right-0 sm:max-w-[85px] w-full max-w-[45px]" />
    </div>
  );
};
