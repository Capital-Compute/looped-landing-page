import Image from "next/image";
import { SuccessCard } from "../../components/SuccessCard";
import Marquee from "react-fast-marquee";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import { Button } from "../../components/Button";

export const SuccessStoriesSection = () => {
  const peopleCards = [
    {
      name: "Emily",
      year: "32",
      text: '"This app transformed how I communicate —my friendships have never been stronger!"',
      videoSrc: "/video.gif",
      emojiSrc: "/Hurramoji.png",
    },
    {
      name: "Sophia",
      year: "27",
      text: '"I’ve grown emotionally, and my relationships feel more meaningful!"',
      videoSrc: "/CuppleGifs.gif",
      emojiSrc: "/BoomEmojy.png",
    },

    {
      name: "Alex",
      year: "29",
      text: "“This app made me more aware of my tone, and my partner noticed the difference immediately!”",
      videoSrc: "/Alex.gif",
      emojiSrc: "/OuchEmojy.png",
    },

    {
      name: "Martin",
      year: "25",
      text: '"This app transformed how I communicate  —my friendships have never been stronger!"',
      videoSrc: "/Martin.gif",
      emojiSrc: "/LoveEmojy.png",
    },
  ];

  return (
    <div className="text-center mt-[102px] sm:mt-[86px] flex flex-col items-center">
      <p className="text-[20px] max-w-[260px] lg:max-w-[980px] xl:text-[40px] text-black font-bold uppercase">
        Success Stories – Real People, Real Results
      </p>
      <p className="font-bold text-[18px] mt-[7px] sm:mt-0 xl:text-[36px] text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
        See How We’ve Changed Lives
      </p>

      <div className="relative w-full overflow-hidden mt-[30px] sm:mt-[65px]">
        {/* Background Image */}
        <Image
          src="/SucsesBackgroudWeb.png"
          width={1806}
          height={744}
          alt="Background"
          className="absolute top-0 w-full h-auto z-0 mt-20"
        />

        {/* Scrolling Wrapper */}
        <Marquee className=" gap-[17px] lg:space-x-[75px] pb-5 sm:pb-12 ">
          <div className="mt-6 flex z-10 gap-[17px] lg:gap-[76px]">
            {Array(2)
              .fill(peopleCards)
              .flat()
              .map((item, index) => (
                <div
                  key={index}
                  className={` ${index % 2 === 0 ? "" : "mt-6"}`}
                >
                  <SuccessCard
                    name={item.name}
                    year={item.year}
                    text={item.text}
                    videoSrc={item.videoSrc}
                    emojy={item.emojiSrc}
                  />
                </div>
              ))}
          </div>
        </Marquee>

        {/* Button */}
        <div className=" hover:scale-110 duration-300 cursor-pointer  max-w-[505px] mx-auto mt-[3%] hidden sm:block">
          <Button />
        </div>
        <div className=" hover:scale-110 duration-300 cursor-pointer  max-w-[302px] mx-auto mt-[3%] block sm:hidden">
          <Button />
        </div>
      </div>
    </div>
  );
};
