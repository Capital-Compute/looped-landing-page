'use client'
import { useState } from "react";
import { PlusIcon } from "../app/icons/PlusIcon";

export const FaqCard = ({ category, questions, isPink }) => {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="2xl:max-w-[813px] w-full md:max-w-[570px] min-h-[266px] 2xl:min-h-[685px] lg:rounded-[47px] rounded-[20px] bg-white p-6 py-3 px-3 md:py-[38px] md:px-10">
      <div className="relative w-full h-[32px] pt-1 md:pt-0 md:h-[76px] rounded-[27px]">
        {/* Blurred Background */}
        {isPink && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r to-[#F686DC] from-[#FFFFFF] filter blur-sm rounded-[27px]"></div>
        )}

        {/* Text */}
        <h2
          className={`relative z-10 text-[16px] md:text-[35px] lg::text-[48px] font-bold mb-4 xl:mb-6 text-[#373737] `}
        >
          {category}
        </h2>
        <div className=" w-[52px] h-px md:h-[3px] bg-[#373737] md:w-[126px] sm:mt-7 lg:mt-0"/>
      </div>

      <ul className="space-y-4 mt-[24px] md:mt-[50px]  ">
        {questions.map((question, index) => (
          <li key={index} className={`border-b border-black pb-4 md:pb-8 px-2 rounded   ${openIndex === index ? 'bg-[#FFF9F9]' : ''}`}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <p className="text-[12px] sm:text-[20px] lg:text-[30px] font-semibold">{question.question}</p>
              <span className="text-[24px] font-bold hidden md:block">
                <div className={` duration-300  ${openIndex === index ? ' rotate-45' : ''}`}>
                <PlusIcon/>

                </div>
              
              </span>
              <span className="text-[24px] font-bold block md:hidden">
                <div className={` duration-300  ${openIndex === index ? ' rotate-45' : ''}`}>
                <PlusIcon width={16} height={16}/>

                </div>
              
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openIndex === index ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <p className="text-[12px] sm:text-[16px] lg:text-[16px] text-gray-600 mt-2">
                {question.answer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
