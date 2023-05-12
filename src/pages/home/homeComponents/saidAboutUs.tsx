import React from 'react';

import Image from '../../../components/image';

import { SaidAboutUsType } from '../../../hooks/useHome';

import CommaBlue from "../../../assets/images/CommaBlue.png"

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
      </div>
  )
}

export default SaidAboutUs;