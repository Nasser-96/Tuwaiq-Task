import React from 'react';

import Image from '../../../components/image';

import learnLaptop from '../../../assets/images/learnLaptop.png';

type Props = {}

export default function WelcomeComponent({}: Props) 
{
  return (
    <div className={`h-full`}>
      <div className={`backdrop-blur-[50.5px] z-[1] opacity-100 left-0 right-0 relative border border-blue1 flex flex-col items-center justify-center rounded-[46px]
          2xl:top-[220px] 2xl:px-10 2xl:py-32 2xl:mx-80 
          `}>
            <div className={`text-staticBlue2 text-[62px]/[69.19px]`}>
              منصة تعلّم
            </div>
            <div className={`text-textBlack text-[48px]/[53.57px]`}>
              وجهتك الأولى لكل جديد في عالم التقنية!
            </div>
            <Image 
                image={learnLaptop}
                divStyle={`z-[2] h-full w-full relative
                2xl:mx-40 2xl:right-[-250px] top-[-70px]
                `}
                imageStyle={`absolute 2xl:top-[0px] 2xl: h-[700.23px] 2xl:w-[690px]`}
              />
        </div>
        <div className={`bg-textWhite relative bottom-[400px] rounded-xl rounded-[46px] overflow-hidden
          2xl:mx-32 2xl:h-[544px]
          `}>
          <div className={`relative bootom-0`}>
            <div className={`absolute rounded-[100%] bg-staticBlue2
            2xl:top-[-700px] 2xl:right-[-100px] 2xl:w-[964.4px] 2xl:h-[1146px] 
            `}/>
          </div>
        </div>

    </div>
  )
}


// import React from 'react'

// type Props = {}

// export default function WelcomeComponent({}: Props) 
// {
//   return (
//     <div className={`mx-32 bg-textWhite rounded-xl rounded-[46px]`}>
//         <div className={`relative mx-56 bg-textWhite p-32 rounded-[46px]`}>
//           <div className={`absolute top-40 left-0 right-0 flex flex-col items-center justify-center border border-blue1 rounded-[46px]`}>
//             <div className={`text-staticBlue text-[62px]/[69.19px]`}>
//               منصة تعلم
//             </div>
//             <div className={`text-textBlack text-[48px]/[53.57px]`}>
//               وجهتك الأولى لكل جديد في عالم التقنية!
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }