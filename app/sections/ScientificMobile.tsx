"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import  DataShowerCard  from "../../components/DataSowerCard";
import Image from "next/image";

const cardsData = [
  {
    title: "“HUMAN PARTNERS CORRELATIONS AND COMMUNICATION”",
    researchText: "Brett, M.",
    benefitText:
      "Improve communication patterns. Our AI analyzes tone and timing, helping you mirror positive communication habits to build emotional intimacy.",
    imgSrc: "/BrettM.png",
  },
  {
    title: "“PERSONAL TRAITS AND MARITAL SATISFACTION”",
    researchText: "Not explicitly stated",
    benefitText:
      "Strengthen communication. Our AI provides insights to keep conversations positive and engaging, creating deeper emotional connections.",
    imgSrc: "/Atom.png",
  },
  {
    title: "“ROMANTIC RELATONSHIPS COMMUNICATION”",
    researchText: "Brett, M.",
    benefitText:
      "Improve communication patterns. Our AI analyzes tone and timing, helping you mirror positive communication habits to build emotional intimacy.",
    imgSrc: "/CardDataPhoto23.png",
  },
  {
    title: "“EMOJI USE AND EMOTIONAL EXPRESSION IN TEXTING”",
    researchText: "Brett, M.",
    benefitText:
      "Improve communication patterns. Our AI analyzes tone and timing, helping you mirror positive communication habits to build emotional intimacy.",
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

export const ScientificMobile = () => {
  return (
    <div id="mobileblock" className="block lg:hidden mt-[0px]">
      <p className="text-[20px] font-extrabold text-center max-w-[261px] mx-auto">
        Scientific Research Backing the Platform
      </p>
      <p className="text-[20px] font-extrabold mt-3 text-center max-w-[281px] mx-auto text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
        The app pulls insights from the following studies
      </p>

      <div className=" pl-0 min-h-[760px] pt-[45px]   ">
        <div className=" absolute left-0 ">
          <Image
            src="/ResearchMobileBackground.png"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <Swiper
          slidesPerView={1.2}
          className=""
          centeredSlides={false}
          spaceBetween={20}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide
              key={index}
              className={`${index % 2 === 0 ? "mt-5" : "mt-0"}`}
            >
              <DataShowerCard
                title={card.title}
                researchText={card.researchText}
                benefitText={card.benefitText}
                imgSrc={card.imgSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={1.2}
          className=" mt-6 "
          centeredSlides={false}
          spaceBetween={10}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide
              key={index}
              className={`${index % 2 === 0 ? "mt-5" : "mt-0"} w-[269px]`}
            >
              <DataShowerCard
                title={card.title}
                researchText={card.researchText}
                benefitText={card.benefitText}
                imgSrc={card.imgSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
