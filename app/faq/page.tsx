import Image from "next/image";
import { Header } from "../../components/Header";
import { FaqCard } from "../../components/FaqCard";
import { Foother } from "../sections/Foother";
import Link from "next/link";

const firstAnswer =
  "✨💡 It works directly with WhatsApp to help you find meaningful connections without ever needing to download anything! 💕✨ No storage worries, no complicated setup—just smarter dating!";
const data = [
  {
    category: "Getting to Know Looped",
    questions: [
      {
        question: "What is Looped?",
        answer:
          "Looped is a revolutionary server-based dating app powered by AI. 🌟🌟 It works directly with WhatsApp to help you find meaningful connections without ever needing to download anything! 🌟✨ No storage worries, no complicated setup—just smarter dating. 🌟",
      },
      {
        question: "How does Looped work?",
        answer:
          "Looped analyzes your preferences, personality, and dating goals through AI to match you with the most compatible people. 🌟🌟 Just give WhatsApp authorization, answer a few questions, and Looped takes care of the rest. 🌟",
      },
      {
        question: "Who is Looped for?",
        answer:
          "Looped is perfect for:\n• 🌟 Those seeking genuine relationships.\n• 🌟 🌟 Anyone who prefers a lightweight, no-download solution.\n• 🌟 People tired of traditional dating apps and endless swiping.",
      },
      {
        question: "Is Looped really free?",
        answer:
          "Yes, completely free! Looped is supported by ad revenues and will always remain free for everyone. 🌟",
      },
      {
        question: "Does Looped save my data?",
        answer:
          "Never. Looped is committed to privacy. Your data is processed securely and never stored on our servers. It stays with you, and we don’t share or sell your information. 🌟",
      },
    ],
  },
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I start using Looped?",
        answer:
          "It’s easy:\n• Go to Looped’s website and click Get Started.\n• Authorize WhatsApp access to begin. ✅\n• Answer a few personality-based questions, and our AI will find your best matches. 🌟",
      },
      {
        question: "Do I need to download anything?",
        answer:
          "Nope! Looped is completely server-based and works seamlessly through WhatsApp. No downloads, no updates, no hassle! 🌟✨",
      },
      {
        question: "Is Looped available worldwide?",
        answer: "Yes! 🌟 Looped is accessible wherever WhatsApp works.",
      },
      {
        question: "What’s the catch if it’s free?",
        answer:
          "No catch. Looped is funded by non-intrusive ads to keep the service free for all users. Your experience remains smooth, private, and hassle-free. 🌟",
      },
    ],
  },
  {
    category: "Using Looped",
    questions: [
      {
        question: "How does Looped use WhatsApp?",
        answer:
          "Looped integrates with WhatsApp to provide a seamless experience. It:\n• Sends you personalized match suggestions. 🌟\n• Lets you chat directly with your matches. 🌟\n• Uses AI to offer icebreakers and tips. 🌟",
      },
      {
        question: "Can I customize my preferences?",
        answer:
          "Yes! You can set filters for:\n• Location 🌟\n• Age and interests 🌟🌟\n• Deal-breakers and must-haves ✅❌",
      },
      {
        question: "What if I don’t like a match?",
        answer:
          "Tap Not Interested via WhatsApp, and our AI will refine your preferences. 🌟",
      },
      {
        question: "Can Looped help me start a conversation?",
        answer:
          "Absolutely! Looped provides AI-generated icebreakers tailored to your match’s profile, ensuring no more awkward 'Hi' messages. 🌟🌟",
      },
    ],
  },
  {
    category: "Privacy and Security",
    questions: [
      {
        question: "Does Looped store my data?",
        answer:
          "Never. Looped operates on a zero-data-storage policy. Your personal information is processed securely and never saved on our servers. What happens in Looped stays in Looped. 🌟",
      },
      {
        question: "Is Looped safe to use?",
        answer:
          "Yes! Looped prioritizes:\n• End-to-end encryption for your chats. 🌟\n• Strict data privacy standards. ✅\n• AI-powered fraud detection to keep the platform safe. 🌟",
      },
      {
        question: "Can I stay anonymous?",
        answer:
          "Yes! You control what information is shared with your matches. 🌟 Your privacy is always in your hands.",
      },
    ],
  },
  {
    category: "Matches and AI Features",
    questions: [
      {
        question: "How does Looped match people?",
        answer:
          "Looped uses cutting-edge AI to analyze:\n• Your personality and preferences. 🌟\n• Shared interests and compatibility scores. 🌟\n• Real-time feedback to improve match quality. 🌟",
      },
      {
        question: "What is the AI Dating Coach?",
        answer:
          "Your AI coach provides:\n• Tailored conversation tips. 🌟\n• Personalized date ideas. 🌟🌟\n• Profile improvement suggestions. 🌟",
      },
      {
        question: "Can Looped work for long-distance relationships?",
        answer:
          "Yes! Looped connects you with people near or far, depending on your preferences. 🌟🌟",
      },
    ],
  },
  {
    category: "Support and Feedback",
    questions: [
      {
        question: "What if I face a problem with Looped?",
        answer:
          "Chat with our 24/7 support team via WhatsApp. 🌟\nEmail us at support@looped.com for assistance. 🌟",
      },
      {
        question: "How do I leave feedback about Looped?",
        answer:
          "We love hearing from you! You can:\n• Use the Feedback option on our website. 🌟\n• Share your thoughts directly via WhatsApp. 🌟",
      },
      {
        question: "How do I report or block someone?",
        answer:
          "Simply reply Block or Report to the chat, and we’ll handle it immediately. 🌟",
      },
    ],
  },
  {
    category: "Success Stories",
    questions: [
      {
        question: "Does Looped really work?",
        answer:
          "Yes! Thousands of happy users have found their perfect match with Looped. Check out inspiring success stories on our website. 🌟🌟",
      },
      {
        question: "How long does it take to find a match?",
        answer:
          "Our AI works quickly to find high-quality matches. Many users find meaningful connections in just a few days! 🌟",
      },
    ],
  },
  {
    category: "Frequently Asked Concerns",
    questions: [
      {
        question: "Why does Looped need WhatsApp access?",
        answer:
          "Looped works through WhatsApp to provide a seamless, lightweight experience without requiring downloads or installations. Your data is safe, and we only use the minimum required for matchmaking. 🌟",
      },
      {
        question: "Can Looped handle multiple preferences?",
        answer:
          "Of course! Looped’s AI adapts to your changing preferences and ensures you get tailored matches every time. 🌟🌟",
      },
      {
        question: "Does Looped ever charge for anything?",
        answer:
          "Never! Looped is and will always be 100% free, supported by unobtrusive ads. 🌟",
      },
    ],
  },
];

export default function faq() {
  return (
    <div className=" mx-auto bg-[url('/faqbag.png')] ss:bg-[url('/tabletBackground1.png')] xs:bg-[url('/faqbackground.png')] bg-no-repeat max-w-[1920px] w-full min-h-screen sm:pt-[10px] xl:pt-0 md:px-[2rem] px-5 2xl:px-[0rem]">
      <div className=" lg:px-6 xxl:px-0">
        <>
          <div className="max-w-[1700px] lg:max-w-[1264px] xl:max-w-[1600px] w-full mx-auto hidden sm:flex items-center justify-between px-0 pt-[40px] md:pt-[15px] 2xl:px-[40px] ">
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
            <div className=" hidden lg:flex gap-[47px] items-center text-lg font-semibold">
              <Link href={"/faq"}>FAQ</Link>
              <p>Privacy</p>
              <p>Science</p>
              <div className=" border-[2px] font-bold border-r-[#F686DC] border-t-[#FFCB78] border-b-[#F686DC] border-l-[#FFCB78] w-[164px] h-[50px] rounded-[40px] text-[16px] flex items-center justify-center">
                Join Now
              </div>
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
      </div>
      <div className="max-w-[1200px] mt-10 xl:mt-0 2xl:max-w-[1500px] w-full flex flex-col xl:flex-row justify-between mx-auto items-center">
        <div>
          <p className="uppercase text-[19px] sm:text-[40px] xl:text-[68px] font-black xl:max-w-[671px] text-transparent bg-clip-text bg-gradient-to-r from-[#E4519D] to-[#F5B55B]">
            Your Questions Answered
          </p>
          <p className="text-[14px] sm:text-[20px] mx-auto xl:text-[28px] text-[#5E5E5E] font-bold max-w-[324px] xl:max-w-[763px] mt-4 sm:mt-[28px]">
            Your help center can instantly give you answers to many frequently
            asked questions.
          </p>
        </div>

        <div className="hidden xl:block">
          <Image src={"/FaqHeaderPhoto.png"} width={617} height={620} alt="" />
        </div>

        <div className="block xl:hidden">
          <Image src={"/FaqHeaderPhoto.png"} width={474} height={134} alt="" />
        </div>
      </div>

      <div className="max-w-[1700px] w-full mx-auto flex justify-center flex-wrap md:gap-[74px] gap-[18px] mt-[34px] lg:mt-[124px]">
        {data.map((category, index) => (
          <FaqCard
            key={index}
            category={category.category}
            questions={category.questions}
            isPink={[0, 3, 4, 7].includes(index)} // Check if index is in [0, 3, 4, 5]
          />
        ))}
      </div>
      <Foother />
    </div>
  );
}
