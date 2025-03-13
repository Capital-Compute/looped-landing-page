import Image from "next/image"
import Link from "next/link"

export const Button = () => {

    return (
        <>
        <div className=" relative  hidden sm:block shadow-custom max-w-[365px] lg:max-w-[626px] w-full duration-300 hover:scale-110 cursor-pointer">
            <Link href="https://app.wisdomnow.co/looped/signIn" target="_blank" rel="noopener noreferrer" className="cursor-pointer" >
            <Image src={'/Button.png'} width={500} height={111} alt="" className=" dragfalse" draggable='false'/>
            <div className=" absolute top-5 sm:top-5 lg:top-9 left-1/4 ">
                <p className=" text-[16px] lg:text-[20px] font-bold leading-[14px] md:leading-[24px]">START NOW</p>
                <p className=" lg:text-[16px] text-[12px] font-bold text-[#F61E83] text-center">FREE FOREVER</p>
            </div>
            
            <div className=" absolute right-1/3 translate-x-[calc(33.333333%-7px)] top-7  lg:top-9">

                <Image src={'/WhatsupGif.gif'} width={32} height={32} alt="" className=" w-[20px] h-[20px] mx-auto lg:w-[32px] lg:h-[32px]"/>
                <p className="text-[8px] lg:text-[11.09px] font-bold ">FOR WHATSAPP</p>

            </div>
            </Link>
        </div>

        <div className=" relative  block sm:hidden shadow-custom max-w-[365px] lg:max-w-[626px] w-full duration-300 hover:scale-110 cursor-pointer">
            <Link href="https://app.wisdomnow.co/looped/signIn" target="_blank" rel="noopener noreferrer" className="cursor-pointer" >
            <Image src={'/buttonMobile.png'} width={335} height={111} alt="" className=" dragfalse" draggable='false'/>
            <div className=" absolute top-6 sm:top-5 lg:top-9 left-1/4 -translate-x-[calc(25%-10px)] ">
                <p className=" text-[16px] lg:text-[20px] font-bold leading-[14px] md:leading-[24px]">START NOW</p>
                <p className=" lg:text-[16px] text-[12px] font-bold text-[#F61E83] text-center">FREE FOREVER</p>
            </div>
            
            <div className=" absolute  right-[calc(25%+12px)] translate-x-[calc(33.333333%-7px)] top-5  lg:top-9">

                <Image src={'/WhatsupGif.gif'} width={32} height={32} alt="" className=" w-[20px] h-[20px] mx-auto lg:w-[32px] lg:h-[32px]"/>
                <p className="text-[8px] lg:text-[11.09px] font-bold ">FOR WHATSAPP</p>

            </div>
            </Link>
        </div>
        </>

    )
}