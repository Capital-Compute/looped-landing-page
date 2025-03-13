import Image from "next/image";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import WhatsappMobileIcon from "../icons/WhatsappMobileIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import WhatsappIcon2 from "../icons/WhatsappIcon2";
import { Button } from "../../components/Button";

const InfoCard = ({ title, description }) => (
  <div className="mt-5 max-w-[411px] w-full">
    <div className=" max-w-[287px] lg:max-w-[411px] flex items-center pl-[50px] lg:pl-[0px] xl:pl-[60px] xl:justify-start w-full h-[36px] lg:h-[46px] rounded-[27px] bg-gradient-to-r to-[#F686DC] from-[#FFCB78] text-white text-lg">
      <ul>
        <li className={"list-disc"}>
          <p className=" text-[14px] lg:text-[18px] font-medium ">{title}</p>
        </li>
      </ul>
    </div>
    <p className="ml-[30px]    sm:ml-0 max-w-[251px] sm:max-w-[398px] text-[#313131] mt-2 lg:pl-[40px] text-[14px] lg:text-[20px]">
      {description}
    </p>
  </div>
);

export const PrivacyandSecuritySection = () => {
  return (
    <div className=" lg:max-w-[1750px] w-full mx-auto px-0 lg:px-0 mt-[56px] lg:mt-[120px] relative">
      <div className="  sm:hidden flex justify-between">
        <Image
          src={"/Hello.png"}
          alt="Hello Icon"
          width={64}
          height={45}
          className=" "
        />

        <Image
          src={"/LoveEmoji.png"}
          alt="Love Emoji"
          width={203}
          height={178}
          className="w-[54px] h-[45px] 2xl:w-[203px]  2xl:h-[178px] lg:w-[130px] lg:h-[130px]"
        />
      </div>
      <div className="flex items-center justify-center max-w-[920px] 2xl:max-w-[1450px] mx-auto px-0 2xl:px-0 ">
        <Image
          src={"/Hello.png"}
          alt="Hello Icon"
          width={239}
          height={178}
          className="w-[64px] h-[45px] lg:w-[130px] hidden lg:block lg:h-[80px] 2xl:w-[239px] 2xl:h-[178px]"
        />
        <p className="text-black text-[18px] lg:text-[30px] 2xl:text-[40px] mx-auto text-center font-bold lg:translate-y-10  lg:text-start uppercase">
          Your heart deserves a guide!
          <span className=" text-black">🗺️</span>
        </p>
        <Image
          src={"/LoveEmoji.png"}
          alt="Love Emoji"
          width={203}
          height={178}
          className="w-[54px] h-[45px] 2xl:w-[203px] hidden lg:block 2xl:h-[178px] lg:w-[130px] lg:h-[130px]"
        />
      </div>
      <div className=" duration-300 cursor-pointer  max-w-[500px] mt-4 hidden sm:block absolute -bottom-32 left-1/2 -translate-x-1/2   ">
        <Button />
      </div>

      <p className="hidden lg:block text-[18px] lg:mt-[0px] lg:text-[25px] 2xl:text-[30px] text-center max-w-[860px] xl:max-w-[683px] mx-auto font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F686DC] from-[#FFCB78]">
        {`With Looped, AI charts a clear path to love 
that feels effortless, meaningful, and truly 
yours.`}
        <span className=" text-black">💖</span>
      </p>

      <p className="text-[18px] text-center max-w-[332px] mx-auto leading-[26px] mt-2 md:mt-0 font-bold lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#F686DC] to-[#FFCB78]">
        {`Let AI lead the way to love that's
100% worth the journey.`}
        <span className=" text-black">💖</span>
      </p>

      <div className="w-full relative">
        <Image
          src={"/PrivacyWeb.png"}
          width={1600}
          height={1189}
          alt="Secure"
          className="relative hidden xl:block mt-10 mx-auto"
        />

        <div className=" flex flex-col items-center ">
          <div className="max-w-[335px] w-full  block xl:hidden">
            <InfoCard
              title="No Conversation Storage"
              description="The AI analyzes chats in real-time and
discards data instantly."
            />
            <div className=" ">
              <InfoCard
                title="GDPR and CCPA Compliance"
                description="We follow strict privacy rules, keeping 
your data safe."
              />
            </div>
          </div>
        </div>

        <Image
          src={"/SecureMobile.png"}
          width={1536}
          height={1189}
          alt="Secure Mobile"
          className="relative block xl:hidden mt-[25px] sm:max-w-[500px] mx-auto"
        />

        <div className=" flex flex-col items-center ">
          <div className="max-w-[335px] w-full  block xl:hidden">
            <InfoCard
              title="Your privacy, protected."
              description="Analysis is encrypted and anonymous, 
making user traceability impossible."
            />
            <div className=" ">
              <InfoCard
                title="GDPR and CCPA Compliance"
                description="Looped secures, conceals, and keeps 
no data—pure trust."
              />
            </div>
          </div>
        </div>

        <div className=" xl:max-w-[500px] 2xl:max-w-[721px] w-full lg:absolute left-0 2xl:left-20 lg:-bottom-5 xxl:bottom-4  hidden xl:block lg:scale-75  xxl:scale-100 ">
          <InfoCard
            title="Your privacy, protected."
            description="Analysis is encrypted and anonymous, 
making user traceability impossible."
          />
          <div className=" ">
            <InfoCard
              title="User Control"
              description="Looped secures, conceals, and keeps 
no data—pure trust."
            />
          </div>
        </div>

        <div className=" lg:max-w-[510px] 2xl:max-w-[810px] w-full lg:absolute right-4 xl:-right-1/4 xl:-translate-x-[63%] 2xl:-translate-x-1/3 xl:-top-6 2xl:top-0 top-5 hidden xl:block lg:scale-75  xxl:scale-100 ">
          <InfoCard
            title="No Conversation Storage"
            description="The AI analyzes chats in real-time and
discards data instantly."
          />
          <div className=" ">
            <InfoCard
              title="GDPR and CCPA Compliance"
              description="We follow strict privacy rules, keeping 
your data safe."
            />
          </div>
        </div>
        <div className=" blok md:hidden max-w-[310px] mt-[40px]">
          <Button />
        </div>
      </div>
    </div>
  );
};
