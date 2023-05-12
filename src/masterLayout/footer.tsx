import React from 'react'

import Image from '../components/image'

import image_pencil from "../assets/images/pencil.png";
import { useNavigate } from 'react-router-dom';

type Props = 
{
  scrollToourNewRef:() =>void
  handleScrollToMostProminentFields:() =>void
}

export default function Footer(props: Props) 
{
  const navigate = useNavigate()
  return (
    <>
      <div className={`mt-[200px] rounded-md mx-28 py-10 px-6 mb-10 bg-textWhite`}>
        <div className={`flex flex-col flex-col-reverse sm:flex-row sm:items-center sm:justify-between`}>
          <div>
            <div className={`py-1 cursor-pointer`} onClick={()=>navigate('/')}>
              الرئيسية
            </div>
            <div className={`py-1 cursor-pointer`} onClick={()=> props.scrollToourNewRef()}>
              جديدنا
            </div>
            <div className={`py-1 cursor-pointer`} onClick={()=> props.handleScrollToMostProminentFields()}>
              أبرز المجالات
            </div>
          </div>
          <div className='flex justify-end cursor-pointer' onClick={()=>navigate('/')}>
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