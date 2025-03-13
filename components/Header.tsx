import Image from "next/image";
import { BurgerIcon } from "../app/icons/BurgerIcon";
import { LoopedIcon } from "../app/icons/LoopedIcon";
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <>
    <div className="max-w-[1700px] lg:max-w-[1264px] xl:max-w-[1700px] w-full mx-auto hidden sm:flex items-center justify-between px-0 pt-[40px] md:pt-[15px] 2xl:px-[90px] ">
      <Link href={"/"}>
        <div className=" hidden md:flex items-center gap-[8px] lg:gap-[22px]">
          <Image src={"/LoopedLogo.png"} width={242} height={72} alt="" />
        </div>
      </Link>
      <Link href={"/"}>
        <div className=" block md:hidden">
          <Image src={"/LoopedLogo.png"} width={145} height={34} alt="" />
        </div>
      </Link>

      <div className=" flex items-center  lg:gap-[22px] lg:hidden gap-2">
        <div className=" border-[2px] font-semibold border-r-[#F686DC] border-t-[#FFCB78] border-b-[#F686DC] border-l-[#FFCB78] w-[102px] h-[34px] rounded-[40px] text-[12px] flex items-center justify-center">
          Join Now
        </div>
      </div>
      <div className=" hidden lg:flex gap-[47px] font-semibold items-center text-lg">
        <Link href={"/faq"}>FAQ</Link>
        <p>Privacy</p>
        <p>Science</p>
        <Link href="https://app.wisdomnow.co/looped/signIn" target="_blank" rel="noopener noreferrer" className=" border-[2px] font-bold border-r-[#F686DC] border-t-[#FFCB78] border-b-[#F686DC] border-l-[#FFCB78] w-[164px] h-[50px] rounded-[40px] text-[16px] flex items-center justify-center">
          Join Now
        </Link>
      </div>
    </div>

    <div className=" max-w-[1700px] w-full mx-auto flex sm:hidden items-center justify-between px-0 pt-[40px] md:pt-[15px] 2xl:px-14 ">
      
      <Link href={"/"}>
        <div className=" block md:hidden">
          <Image src={"/LoopedLogo.png"} width={145} height={34} alt="" />
        </div>
      </Link>

      <div className=" flex items-center  lg:gap-[22px] lg:hidden gap-2">
        <div className=" border-[2px] font-semibold border-r-[#F686DC] border-t-[#FFCB78] border-b-[#F686DC] border-l-[#FFCB78] w-[102px] h-[34px] rounded-[40px] text-[12px] flex items-center justify-center">
          Join Now
        </div>
      </div>
      <div className=" hidden lg:flex gap-[47px] items-center text-lg">
        <Link href={"/faq"}>FAQ</Link>
        <p>Privacy</p>
        <p>Science</p>
        <div className=" border-[2px] font-bold border-r-[#F686DC] border-t-[#FFCB78] border-b-[#F686DC] border-l-[#FFCB78] w-[164px] h-[50px] rounded-[40px] text-[16px] flex items-center justify-center">
          Join Now
        </div>
      </div>
    </div>
    </>

  );
};
