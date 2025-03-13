import Image from "next/image"

export const ImgSection = () => {
    return (
        <div className=" flex justify-center mt-[40px] xl:mt-[200px] max-w-[1300px] mx-auto 2xl:max-w-[1572px] md:mt-[150px] 2xl:mt-[150px] px-0 md:px-0">
            <Image src={'/Image.png'} width={1444} height={1268} alt="" className=" hidden sm:block"/>
            <Image src={'/ImageMobile.png'} width={1444} height={1268} alt="" className=" block sm:hidden"/>

        </div>
    )
}