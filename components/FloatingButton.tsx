import Image from "next/image"

export const FloatingButton = () => {

  return (
    <>
      <div
        className=" relative shadow-custom  duration-300 hover:scale-110 cursor-pointer min-w-[200px] min-h-[70px] max-w-[200px] max-h-[70px] lg:min-w-[282px] lg:min-h-[92px] lg:max-w-[282px] lg:max-h-[92px]">
        <Image src={'/floating-button.png'} width={282} height={92} alt="" className=" dragfalse w-full h-full" draggable='false'/>
        <div
          className={"absolute top-3 lg:top-5 right-8 flex items-center gap-2 lg:gap-[18px]"}>
          <div className="space-y-1 lg:space-y-2">
            <p className=" text-[14px] lg:text-[24px] font-bold leading-[14px] ">START NOW</p>
            <p className="text-[12px] lg:text-[18px] font-bold text-[#F61E83] text-center">FREE FOREVER</p>
          </div>
          <Image src={'/WhatsupGif.gif'} width={40} height={40} alt=""
                 className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] "/>
        </div>
      </div>
    </>

  )
}