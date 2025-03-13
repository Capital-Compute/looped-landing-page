"use client";

import Image from "next/image";
//
// export const DataShowerCard = ({
//   title,
//   imgSrc,
//   researchText,
//   benefitText,
// }) => {
//   return (
//     <div className=" px-4 md:px-10 pt-5 md:pt-[51px] py-[20px] bg-white rounded-[28px]  max-w-[269px] w-full md:max-w-[466px] h-[320px] md:min-h-[453px]  text-left md:shadow-xl z-50  ml-2 md:ml-5">
//       <Image src={imgSrc} width={386} height={186} alt="" className=" hidden md:block" />
//       <Image src={imgSrc} width={224} height={127} alt="" className=" block md:hidden" />
//
//       <p className=" mt-3 md:mt-5 text-[12px] md:text-base font-bold">{title}</p>
//       <div className=" flex text-[12px] md:text-[15px]">
//         <p className=" font-bold text-black">Researcher:</p>
//         <p>{researchText}</p>
//       </div>
//       <p className="font-bold text-black text-[12px] md:text-[13px]">Benefit:</p>
//       <p className=" md:mt-[3px] text-[10px] md:text-[13px]">{benefitText}</p>
//
//     </div>
//   );
// };

const DataSowerCard = ({ title, imgSrc, researchText, benefitText }) => {
  return (
    <div
      className={
        "flex lg:gap-[35px] w-[309px] h-[237px] lg:w-[715px] lg:h-[302px] bg-white ml-5 p-[13px] lg:p-[24px] rounded-[14px]"
      }
    >
      <div className={"flex flex-col text-start"}>
        <div className={"flex"}>
          <p
            className={"text-[14px] lg:text-[24px] font-bold pr-[21px] lg:pl-0"}
          >
            {title}
          </p>
          <div
            className={
              "max-w-[80px] min-w-[80px] max-h-[80px] min-h-[80px] lg:hidden"
            }
          >
            <Image
              src={imgSrc}
              width={80}
              height={80}
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
        <div
          className={
            "flex items-center mt-[7px] lg:mt-[25px] text-xs lg:text-[20px] gap-1"
          }
        >
          <p className={" font-bold"}>Researcher:</p>
          <p>{researchText}</p>
        </div>
        <p className={"text-xs lg:text-[20px] font-bold mt-2 lg:mt-4"}>
          Benefit:
        </p>
        <p className={"italic text-xs lg:text-[18px] mt-[8px] leading-[26px]"}>{benefitText}</p>
      </div>
      <div className={"lg:flex hidden flex-col-reverse"}>
        <div
          className={
            "max-w-[170px] max-h-[170px] min-w-[170px] min-h-[170px] hidden lg:block"
          }
        >
          <Image
            src={imgSrc}
            width={170}
            height={170}
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default DataSowerCard;
