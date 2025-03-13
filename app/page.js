import { Header } from "../components/Header";
import { HeaderSection } from "./sections/HeaderSection";
import { TechnologySection } from "./sections/TechnologySection";
import { PrivacyandSecuritySection } from "./sections/PrivacyandSecurity";
import { ImgSection } from "./sections/ImgSection";
import { EmotionalSection } from "./sections/EmotionalSection";
import { Foother } from "./sections/Foother";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { FeaturesOverview } from "./sections/FeaturesOverviewSection";
import { FindThePath } from "./sections/FindThePathSecton";
import { SettleSection } from "./sections/SettleSection";
import { ConnectDeeperSection } from "./sections/ConnectDeeperSection";
import { AuraSection } from "./sections/AuraSection";
import { SoulMate } from "./sections/SoulMate";
import { LoveLifeSection } from "./sections/LovLifeSection";
import {FloatingButton} from "../components/FloatingButton";
export default function Home() {
  return (
    <div className="  bg-black max-w-[1920px] w-full mx-auto  ">
      <div
        className="  bg-no-repeat px-0  sm:px-0  bg-[#FFF9F9] md:bg-[#FFF9F9] bg-[url('/back.png')]  ms:bg-[url('/BackgroundMobile.png')] xs:bg-[url('/MobileBacground.png')] sm:bg-[url('/TabletBackground.png')]  lg:bg-[url('/Background.png')]">
        <div className=" px-5 xl:px-8 2xl:px-0">
          <Header/>
        </div>
        <div className={"fixed bottom-0 right-3 z-[99]"}>
          <FloatingButton/>
        </div>
        <div className=" px-5">
          <HeaderSection/>
        </div>
        <div className=" px-5 ">
          <TechnologySection/>
        </div>

        <div className=" px-5">
          <PrivacyandSecuritySection/>
        </div>
        <div className=" px-5">
          <ImgSection/>
        </div>
        <div className=" px-0">
          <EmotionalSection/>
        </div>
        <div className=" px-0">
          <FeaturesOverview/>
        </div>
        <div className=" px-0">
          <SuccessStoriesSection/>
        </div>

        <FindThePath/>
        <div className=" px-5">
          <SettleSection/>
        </div>
        <div className=" px-5">
          <ConnectDeeperSection/>
        </div>

        <div className="md:bg-[url('/BottomGradient.png')]  bg-no-repeat  px-5 md:px-0 ">
          <AuraSection/>
          <SoulMate/>
          <LoveLifeSection/>
          <Foother/>
        </div>

        {/* <StartStrengthening />  */}
      </div>
    </div>
  );
}
