import React from 'react'

import Image from '../../../components/image'

import learnLaptop from '../../../assets/images/learnLaptop.png';

type Props = {}

export default function WelcomSection({}: Props) 
{
  return (
    <div className={`relative`}>
        <div className={`absolute bg-staticBlue2 rounded-full 
            xl:w-[550px] xl:h-[550px] xl:bottom-[-300px]
            2xl:w-[630px] 2xl:h-[630px] 2xl:bottom-[-300px]
        `}/>
        <div className={`absolute border border-white rounded-[30px] backdrop-blur-[70.5px]
            xl:top-[-90px] xl:w-[590px] xl:h-[230px]
            2xl:top-[-100px] 2xl:w-[679px] 2xl:h-[230px]
            `}
         />
        <div className={`absolute bg-blue6 py-4 rounded-[30px]
            xl:top-[-250px] xl:w-[530px] xl:right-[-30px]
            2xl:top-[-330px] 2xl:w-[540px] 2xl:right-0
        `}>
            <div className={`flex flex-col items-center justify-center`}>
                <div className={`text-[48px]`}>
                    منصة تعلّم
                </div>
                <div className={`text-[32px] text-center`}>
                    وجهتك الأولى لكل جديد في عالم التقنية!
                </div>
            </div>
            <div className={`relative top-[50px]`}>
            <Image
            image={learnLaptop}
            divStyle={`
              flex items-center justify-center
            `}
            imageStyle={`
                xl:w-[360px] xl:h-[400px]
                2xl:w-[420px] 2xl:h-auto
            `}
          />
            </div>
        </div>
    </div>
  )
}