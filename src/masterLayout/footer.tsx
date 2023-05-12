import React from 'react'

import Image from '../components/image'

import image_pencil from "../assets/images/pencil.png";

type Props = {}

export default function Footer({}: Props) 
{
  return (
    <>
      <div className={`mt-[200px] rounded-md mx-28 py-10 px-6 mb-10 bg-textWhite`}>
        <div className={`flex items-center justify-between`}>
          <div>
            <div className={`py-1`}>
              الرئيسية
            </div>
            <div className={`py-1`}>
              جديدنا
            </div>
            <div className={`py-1`}>
              أبرز المجالات
            </div>
          </div>
          <div>
            <Image
                image={image_pencil}
                divStyle={`w-[85px] h-[74px]`}
            />
          </div>
        </div>
      </div>
        <div className='flex items-center justify-center'>
          جميع الحقوق محفوظة لمنصة تعلم 2023
        </div>
    </>
  )
}