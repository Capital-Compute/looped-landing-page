"use client";
import Image from "next/image";
import DataShowerCard from "../../components/DataSowerCard";
import { CheckIcon } from "../icons/CheckIcon";
import Marquee from "react-fast-marquee";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import {useScrollDirection} from "../../hooks/useScrollDirection";
import { Button } from "../../components/Button";

export const ScientificResearcSection = () => {
  const cardsData = [
    {
      title: "“HUMAN PARTNERS CORRELATIONS AND COMMUNICATION”",
      researchText: "Brett, M.",
      benefitText:
        "Improve communication patterns. Our AI analyzes tone and timing, helping you mirror positive communication habits to build emotional intimacy.",
      imgSrc: "/BrettM.png",
    },
    {
      title: "“PERSONALITY TRAITS AND MARITAL SATISFACTION”",
      researchText: "Not explicitly stated",
      benefitText:
        "Communicate better based on personality. Our AI identifies personality traits, helping you adapt your communication style for a more harmonious relationship.",
      imgSrc: "/Atom.png",
    },
    {
      title: "“ROMANTIC RELATONSHIPS COMMUNICATION”",
      researchText: "Brett, M.",
      benefitText:
        "Strengthen communication. Our AI provides insights to keep conversations positive and engaging, creating deeper emotional connections.",
      imgSrc: "/CardDataPhoto23.png",
    },
    {
      title: "“EMOJI USE AND EMOTIONAL EXPRESSION IN TEXTING”",
      researchText: "Brett, M.",
      benefitText:
        "Improve emotional expression with emojis. Our AI suggests the right emojis to build emotional connection and soften difficult conversations.",
      imgSrc: "/CardDataPhoto24.png",
    },
    {
      title: "“REFRAMING THOUGHTS FOR EMOTIONAL WELL-BEING”",
      researchText: "Gonzales, M.",
      benefitText:
        "Reframe negative thoughts. Our AI helps you turn negative conversations into positive, constructive ones, reducing stress and improving communication.",
      imgSrc: "/CardDataPhoto25.png",
    },
    {
      title: "“HUMOR STYLES AND RELATIONSHIP RESILIENCE”",
      researchText: "Suzuki, M.",
      benefitText:
        "Use humor to connect. The AI identifies when humor strengthens your relationship and when it creates distance, helping you lighten the mood appropriately.",
      imgSrc: "/CardDataPhoto26.png",
    },
    {
      title: "“EMOTIONAL INTELLIGENCE AND RELATIONSHIP QUALITY”",
      researchText: "Milhausen, Maitland",
      benefitText:
        "Boost your emotional intelligence. Our AI helps you manage emotions and navigate difficult conversations with more empathy and understanding.",
      imgSrc: "/CardDataPhoto27.png",
    },
    {
      title: "“COMMUNICATION AND CONFLICT MANAGEMENT IN ROMANTIC ...”",
      researchText: "Brett, M.",
      benefitText:
        "Improve communication patterns. Our AI analyzes tone and timing, helping you mirror positive communication habits to build emotional intimacy.",
      imgSrc: "/CardDataPhoto28.png",
    },
    {
      title: "“VALUES IN ROMANTIC RELATIONSHIPS”",
      researchText: " Not explicitly stated.",
      benefitText:
        "Understand emotional tone. Our AI helps you express empathy and support, boosting relationship satisfaction by making your texts more emotionally supportive.",
      imgSrc: "/CardDataPhoto29.png",
    },
  ];

  const [next, setNext] = useState(false);
  const handleNext = () => {
    setNext(!next);
  };
  const scrollDir = useScrollDirection()
  return (
    <>
      <div className="text-center mt-[104px] block">
        <div className="relative flex w-full max-w-[360px] sm:max-w-[1370px] justify-center  mx-auto">
          <Image
            src={"/ScientificLeft.png"}
            alt={""}
            width={84}
            height={84}
            className="hidden md:block md:w-[84px] md:h-[84px] w-[37px] h-[37px] "
          />

          <Image
            src={"/ScientificRight.png"}
            alt={""}
            width={73}
            height={73}
            className="absolute top-4 left-2 md:hidden w-[37px] h-[37px]"
          />

          <div className="hidden md:block">
            <p className="text-[20px] lg:text-[40px] uppercase text-black font-extrabold">
              Scientific Research Backing the Platform
            </p>
            <p className="text-[18px] lg:text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
              The app pulls insights from the following studies
            </p>
          </div>
          <div className="block md:hidden">
            <p className="text-[20px] font-bold text-center max-w-[261px] mx-auto uppercase">
              Scientific Research Backing the Platform
            </p>
            <p className="text-[18px] max-w-[247px] font-bold mt-3 text-center sm:max-w-[301px] mx-auto text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
            The app pulls insights from the following studies
            </p>
          </div>
          <Image
            src={"/ScientificRight.png"}
            alt={""}
            width={73}
            height={73}
            className="hidden md:block w-[37px] h-[37px] md:w-[73px] md:h-[73px]"
          />

          <Image
            src={"/ScientificLeft.png"}
            alt={""}
            width={84}
            height={84}
            className="absolute top-3 right-3 md:hidden w-[43px] h-[43px] "
          />
        </div>

        <div className="relative max-w-[1920px] w-full  px-0 xl:px-0 2xl:px-0">
          {/* Background Image */}
          <Image
            src="/ResearchBackground.png"
            width={1017}
            height={1037}
            alt="Background"
            className="absolute z-0 left-1/2 mt-[88px] lg:mt-[40px] -translate-x-1/2  pointer-events-none"
          />

          {/* Foreground Content */}

          <div className={"flex flex-col gap-14"}>
            <Marquee pauseOnHover={true} speed={30} direction={ "left"}>
              {cardsData.slice(0,4).map((card, index) => (
                <div key={index} className={"2xl:mt-[90px] mt-10"}>
                  <DataShowerCard
                    key={index}
                    title={card.title}
                    researchText={card.researchText}
                    benefitText={card.benefitText}
                    imgSrc={card.imgSrc}
                  />
                </div>
              ))}
            </Marquee>
            <Marquee pauseOnHover={true} speed={30} direction={"right"}>
              {cardsData.slice(4).map((card, index) => (
                    <DataShowerCard
                      key={index}
                      title={card.title}
                      researchText={card.researchText}
                      benefitText={card.benefitText}
                      imgSrc={card.imgSrc}
                    />
              ))}
            </Marquee>
          </div>

          <div className=" max-w-[310px] mx-auto  block sm:hidden mt-5">
            <Button/>
          </div>
          {/*<Marquee className=" md:h-[800px]">*/}
          {/*  {cardsData.map((card, index) => (*/}
          {/*    <div key={index} className={"2xl:mt-[90px] mt-10"}>*/}
          {/*      <DataShowerCard*/}
          {/*        key={index}*/}
          {/*        title={card.title}*/}
          {/*        researchText={card.researchText}*/}
          {/*        benefitText={card.benefitText}*/}
          {/*        imgSrc={card.imgSrc}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</Marquee>*/}
        </div>
      </div>
    </>
  );
};
