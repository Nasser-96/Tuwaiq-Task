import React from 'react';

import Image from '../../../components/image';

import learnLaptop from '../../../assets/images/learnLaptop.png';

type Props = {}

export default function WelcomeComponent({}: Props) 
{
  return (
    <div className={`h-full mt-[400px]`}>
      <div className={`backdrop-blur-[50.5px] text-center z-[2] opacity-100 left-0 right-0 absolute border border-white flex flex-col items-center justify-center rounded-[46px] mt-[400px]
          top-[-190px] py-10 mx-[70px] px-6 
          sm:top-[-100px] sm:px-10 sm:py-10 sm:mx-[70px] 
          2xl:top-[-0px] 2xl:px-10 2xl:py-32 2xl:mx-80 
          `}>
            <div className={`text-staticBlue2
            font-extrabold
              text-[32px]/[69.19px]
              md:text-[52px]/[69.19px]
              lg:text-[62px]/[69.19px]
            `}>
              منصة تعلّم
            </div>
            <div className={`text-textBlack
                text-[22px]/[24.55px]
                md:text-[38px]/[53.57px]
                lg:text-[48px]/[53.57px]
                `}>
              وجهتك الأولى لكل جديد في عالم التقنية!
            </div>
            <Image 
                image={learnLaptop}
                divStyle={`z-[2] h-full w-full 
                  hidden
                  md:relative md:block
                  sm:mx-40 sm:right-[-100px] top-[-70px]
                  md:mx-40 md:right-[-110px] top-[-10px]
                  lg:mx-40 lg:right-[-110px] top-[-0px]
                  xl:mx-40 xl:right-[-30px] top-[-70px]
                  2xl:mx-40 2xl:right-[-250px] top-[-70px]
                `}
                imageStyle={`
                  sm:absolute 
                  sm:top-[0px] sm:w-[270px]
                  md:top-[0px] md:w-[330px]
                  lg:top-[0px] lg:w-[490px]
                  xl:top-[0px] xl:w-[570px]
                  2xl:top-[0px] 2xl:h-[700.23px] 2xl:w-[690px]
                `}
              />
        </div>
        <div className={`bg-textWhite relative bottom-[400px] z-[1] rounded-xl rounded-[46px] overflow-hidden 
          h-[279px] mx-8
          2xl:mx-32 2xl:h-[500px]
          `}>
          <div className={`relative bootom-0`}>
            <div className={`absolute rounded-[100%] bg-staticBlue2
            top-[-100px] right-[-90px] w-[362.07px] h-[342px] 
            sm:top-[-150px] sm:right-[-50px] sm:w-[402.07px] sm:h-[392px] 
            md:top-[-200px] md:right-[-50px] md:w-[462.07px] md:h-[442px] 
            lg:top-[-300px] lg:right-[-50px] lg:w-[602.07px] lg:h-[582px] 
            xl:top-[-400px] xl:right-[-40px] xl:w-[722.07px] xl:h-[702px] 
            2xl:top-[-450px] 2xl:right-[-150px] 2xl:w-[900.4px] 2xl:h-[900px] 
            `}/>
          </div>
        </div>

        <div className={``}>
          <Image 
            image={learnLaptop}
            divStyle={`z-[2] h-full w-full 
              block
              md:hidden
              flex items-center justify-center
              2xl:mx-40 2xl:right-[-250px] top-[-70px]
            `}
            imageStyle={`
              absolute 
              top-[500px] w-[306px]
            `}
          />
        </div>

    </div>
  )
}