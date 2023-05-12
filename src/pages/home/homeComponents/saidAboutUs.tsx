import Image from '../../../components/image';

import { SaidAboutUsType } from '../../../hooks/useHome';

import CommaBlue from "../../../assets/images/CommaBlue.png"
import profileImage from "../../../assets/images/profileImage.png"
import CommaYellow from "../../../assets/images/CommaYellow.png"

type Props = 
{
  saydAboutUs: Array<SaidAboutUsType>
}

const SaidAboutUs = (props: Props) => 
{
  
  return (
      <div className={`mt-[200px] flex flex-col items-center`}>
        <div className={`flex mx-32 items-center 
          w-full
          lg:w-[1000px]
          2xl:w-[1000px]
        `}>
            <div className={`border border-1 border-grey5 w-[50%]`} />
            <div className={`flex items-center justify-center`}>
              <Image image={CommaBlue} imageStyle={` w-[200px] px-4`} />
              <div className={`w-full text-staticYellow
                text-[22px]
                2xl:text-[40px] 2xl:mx-10
              `}>
                قالوا عنا
              </div>
            </div>
        </div>

        <div className={`mt-10 mx-32 flex flex-col items-center 
          w-full
          lg:w-[1000px]
          2xl:w-[1000px]
          `}>
          {
            props?.saydAboutUs?.map((item,index)=>
            {
              return(
                <div className={`mt-10 
                  px-6
                  lg:px-0
                `} key={index}>
                  <div className={`flex items-center`}>
                    <div>
                      <Image image={profileImage} imageStyle={`w-[81.43px] aspect-square rounded-full`}/>
                    </div>
                    <div className={`mx-6`}>
                      <div className={`font-extrabold text-[#361A51] 
                        text-[18px]
                        2xl:text-[30px]
                      `}>
                        {item?.name}
                      </div>
                      <div className={`font-light text-gray3
                        text-[16px]
                        2xl:text-[20px]
                      `}>
                        {item?.title}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center`}>
                    <div>
                      <Image image={CommaYellow} divStyle={`mt-4`} imageStyle={`
                        w-[300.84px]
                        sm:w-[100.84px]
                        lg:w-[50.84px]
                        2xl:w-[85.84px] 2xl:h-[46.35px]
                      `}/>
                    </div>
                    <div className={`text-gray1 ms-12 font-normal 
                        text-[18px]
                        2xl:text-[22px]
                        `}>
                      {item?.details}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default SaidAboutUs;