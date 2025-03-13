'use client'
import Link from "next/link";
import { EmailIcon } from "../icons/EmailIcon";
import { FaceBookIcon } from "../icons/FaceBookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LoopedIcon } from "../icons/LoopedIcon";
import { TikTokIcon } from "../icons/TikTokIcon";
import { XIcon } from "../icons/XIcon";
import Image from "next/image";

export const Foother = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    <div className=" max-w-[1520px] mx-auto w-full sm:px-5 lg:mt-[20px] 2xl:mt-10 mt-20 md:mt-0 pb-5 hidden lg:block ">
      <div className=" bg-[#FCEFE7] blur-[40px] w-full h-[80px] -translate-y-28 md:-translate-y-0"></div>
      <div className=" max-w-[1520px] mx-auto lg:flex lg:justify-between w-full -translate-y-16 md:-translate-y-0 lg:px-10 2xl:px-0">
        <div className=" max-w-[282px] w-full">
          <div
          onClick={() => scrollToTop()}
          className=" flex items-center gap-[8px] lg:gap-[22px] cursor-pointer">
            <Image src='/LopedImage.png' width={201} height={100} alt="" />
          </div>

          <p className=" font-semibold md:text-[20px] mt-5 md:mt-10">
            About Looped
          </p>
          <p className=" text-base mt-2">
            Looped is the AI-powered dating app designed to help you connect
            deeply, communicate effectively, and build lasting relationships.
          </p>
        </div>
        <div className="mt-[16px] flex gap-[85px] md:gap-[140px]">
          <div className=" font-bold text-[14px] space-y-5 md:space-y-0 md:text-[22px] flex flex-col justify-between pt-2">
            <p>Home</p>
            <Link href={"/faq"}>FAQ</Link>
            <p>Privacy Policy</p>
          </div>

          <div className=" font-bold text-[14px] md:text-[22px] flex flex-col justify-between pt-2">
            <p>Terms of Service</p>
            <p>Science & Research</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className=" max-w-[360px] w-full mt-[31px] lg:mt-0">
          <div className=" w-full flex gap-[41px]">
            <div className=" w-[51px] h-[51px] md:w-[55px] md:h-[55px] bg-white rounded-full flex items-center justify-center">
              <FaceBookIcon className={undefined} />
            </div>
            <div className=" w-[51px] h-[51px] md:w-[55px] md:h-[55px] bg-white rounded-full flex items-center justify-center">
              <InstagramIcon className={undefined} />
            </div>
            <div className=" w-[51px] h-[51px] md:w-[55px] md:h-[55px] bg-white rounded-full flex items-center justify-center">
              <XIcon className={undefined} />
            </div>
            <div className=" w-[51px] h-[51px] md:w-[55px] md:h-[55px] bg-white rounded-full flex items-center justify-center">
              <TikTokIcon className={undefined} />
            </div>
          </div>

          <p className=" text-[14px] md:text-[22px] mt-[40px] md:mt-[64px] xl:mt-[60px] 2xl:">
            Have questions? Reach us at
          </p>

          <div className=" max-w-[360px] h-[54px] gap-6 bg-white rounded-[40px] mt-5 flex items-center justify-center">
            <EmailIcon className={undefined} />

            <p className=" text-[16px] sm:text-[20px] font-bold">
            Hihello@loopedapp.me
            </p>
          </div>
        </div>
      </div>
      <p className=" pb-3 sm:pb-0 text-center  md:mt-[68px] text-[12px] font-normal md:text-[16px] md:font-medium">
        © 2024 Looped. All rights reserved.
      </p>
      </div>

      <div className=" max-w-[1520px] mx-auto w-full sm:px-5 lg:mt-[20px] 2xl:mt-10 mt-20 md:mt-0 pb-5 block lg:hidden ">
      <div className=" bg-[#FCEFE7] blur-[40px] w-full h-[80px] -translate-y-28 md:-translate-y-0"></div>
      <div className=" max-w-[1520px] mx-auto sm:flex lg:justify-between w-full -translate-y-16 md:-translate-y-0 lg:px-10 2xl:px-0 gap-4">
        <div className=" max-w-[282px] w-full">
          <div
          onClick={() => scrollToTop()}
          className=" flex items-center gap-[8px] max-w-[108px] md:max-w-[201px] lg:gap-[22px] cursor-pointer">
            <Image src={'/LopedImage.png'} width={201} height={60} alt=""/>
          </div>

          <p className=" font-semibold md:text-[20px] mt-5 md:mt-10">
            About Looped
          </p>
          <p className=" text-base mt-2">
            Looped is the AI-powered dating app designed to help you connect
            deeply, communicate effectively, and build lasting relationships.
          </p>
        </div>
        <div className=" flex xl:gap-[85px] md:gap-[140px] justify-between sm:justify-start mt-[18px] sm:mt-0">
          <div className=" font-bold text-[14px] space-y-5 md:space-y-0 md:text-[22px] flex flex-col justify-between pt-2">
            <p>Home</p>
            <Link href={"/faq"}>FAQ</Link>
            <p>Privacy Policy</p>
          </div>

          <div className=" font-bold text-[14px] md:text-[22px] flex flex-col justify-between pt-2">
            <p>Terms of Service</p>
            <p>Science & Research</p>
            <p>Contact Us</p>
          </div>
        </div>

    
      </div>
      <div className=" max-w-[360px] w-full sm:mt-[31px] lg:mt-0">
          <div className=" w-full flex gap-[41px]">
            <div className=" w-[51px] h-[51px] md:w-[55px] md:h-[55px] bg-white rounded-full flex items-center justify-center">
              <FaceBookIcon className={undefined} />
            </div>
            <div className=" w-[51px] h-[51px] md:w-[55px] md:h-[55px] bg-white rounded-full flex items-center justify-center">
              <InstagramIcon className={undefined} />
            </div>
            <div className=" w-[51px] h-[51px] md:w-[55px] md:h-[55px] bg-white rounded-full flex items-center justify-center">
              <XIcon className={undefined} />
            </div>
            <div className=" w-[51px] h-[51px] md:w-[55px] md:h-[55px] bg-white rounded-full flex items-center justify-center">
              <TikTokIcon className={undefined} />
            </div>
          </div>

          <p className=" text-[14px] md:text-[22px] mt-[40px] md:mt-[64px]">
            Have questions? Reach us at
          </p>

          <div className=" max-w-[360px] h-[54px] gap-6 bg-white rounded-[40px] mt-5 flex items-center justify-center">
            <EmailIcon className={undefined} />

            <a className=" text-[16px] sm:text-[20px] font-bold">
            Hihello@loopedapp.me
            </a>
          </div>
        </div>
      <p className=" pb-3 sm:pb-0 text-center  md:mt-[68px] mt-5 sm:mt-0">
        © 2024 Looped. All rights reserved.
      </p>
      </div>
      </>
    );
};
