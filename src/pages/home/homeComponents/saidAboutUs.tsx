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
  console.log(props?.saydAboutUs);
  
  return (
      <div className={`mt-[200px]`}>
        <div className={`flex mx-32 items-center w-[50%]`}>
            <div className={`border border-1 border-grey5 w-full`} />
            <div className={`flex items-center justify-center`}>
              <Image image={CommaBlue}/>
              <div className={`text-[40px] mx-10 w-full`}>
                قالوا عنا
              </div>
            </div>
        </div>

        <div className={`mt-10 mx-32`}>
          {
            props?.saydAboutUs?.map((item,index)=>
            {
              return(
                <div className={`mt-10`} key={index}>
                  <div className={`flex items-center`}>
                    <div>
                      <Image image={profileImage} imageStyle={`w-[81.43px] aspect-square rounded-full`}/>
                    </div>
                    <div className={`mx-6`}>
                      <div className={`text-[30px]  font-extrabold text-[#361A51]`}>
                        {item?.name}
                      </div>
                      <div className={`text-[20px] font-light text-gray3`}>
                        {item?.title}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center`}>
                    <div>
                      <Image image={CommaYellow} divStyle={`mt-4`} imageStyle={`w-[45.84px]`}/>
                    </div>
                    <div className={`text-[22px] text-gray1 ms-12 font-normal`}>
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