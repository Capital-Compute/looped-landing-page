import Image from "next/image";

export const DownloadAppButton = () => {
  return (
    <>
      <div
        style={{
          boxShadow:
            "0 30px 40px -10px rgba(246, 134, 220, 0.5), 0 40px 40px -10px rgba(255, 203, 120, 0.5)",
        }}
        className=" hidden animate-bounce  h-[87px] w-full max-w-[488px] rounded-[110px] bg-white md:flex items-center justify-center relative border border-[#F686DC]"
      >
        <div>
          <p className="text-black font-extrabold text-[20px]">
            ALWAYS FREE APP
          </p>
          <p className="mt-1 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F686DC] to-[#FFCB78] text-base font-extrabold">
            DOWNLOAD NOW
          </p>
        </div>

        <div className="absolute -left-14">
          <Image src={"/You.png"} alt={""} width={197} height={197} />
        </div>
        <div className="absolute -right-20">
          <Image src={"/Hello.png"} alt={""} width={197} height={197} />
        </div>
      </div>

      <div
        style={{
          boxShadow:
            "0 30px 40px -10px rgba(246, 134, 220, 0.5), 0 40px 40px -10px rgba(255, 203, 120, 0.5)",
        }}
        className=" mx-auto flex animate-bounce  h-[47px] w-full max-w-[266px] rounded-[110px] bg-white md:hidden items-center justify-center relative border border-[#F686DC]"
      >
        <div>
          <p className="text-black font-extrabold text-[14px]">
            ALWAYS FREE APP
          </p>
          <p className="mt-1 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F686DC] to-[#FFCB78] text-[8px] font-extrabold">
            DOWNLOAD NOW
          </p>
        </div>

        <div className="absolute -left-5">
          <Image src={"/You.png"} alt={""} width={73} height={78} />
        </div>
        <div className="absolute -right-12">
          <Image src={"/Hello.png"} alt={""} width={95} height={67} />
        </div>
      </div>
    </>
  );
};
