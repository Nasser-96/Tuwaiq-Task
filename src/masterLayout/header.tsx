import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useHeader } from '../hooks/useHeader';

import Image from '../components/image';
import Button from '../components/button';

import image_pencil from "../assets/images/pencil.png";
import burgerButton from "../assets/images/burgerButton.png";

type Props = 
{
    scrollToourNewRef:() =>void
    handleScrollToMostProminentFields:() =>void
    isSigupPage:boolean
    
}

export default function Header(props: Props) 
{
    const navigate = useNavigate();
    
    const headerLogic = useHeader();

  return (
    <div className={`sticky top-0 z-10 rounded-[20px] px-4 lg:px-0 lg:mx-28 bg-white py-4 sm:mt-16 mb-10`}>
        <div className={`flex justify-between items-center sm:px-10`}>
            <div className={`flex items-center`}>
                <div className={`cursor-pointer`} onClick={() => navigate("/")}>
                    <Image
                        image={image_pencil}
                        divStyle={`w-[85px] h-[74px]`}
                    />
                </div>
                <div className={`hidden md:block ms-10 cursor-pointer`} onClick={headerLogic?.homePage} >
                    الرئيسية
                </div>
                <div className={`hidden md:block ms-10 cursor-pointer`} onClick={() => headerLogic?.ourNew(props?.scrollToourNewRef)}>
                    جديدنا
                </div>
                <div className={`hidden md:block ms-10 cursor-pointer`} onClick={() => headerLogic?.mostProminentFields(props?.handleScrollToMostProminentFields)}>
                    أبرز المجالات
                </div>
            </div>
            <div className={`flex items-center hidden md:flex`}>
                {
                    !(props?.isSigupPage)
                    &&
                    <Button
                        action={headerLogic?.signup}
                        disabled={false}
                        style={`bg-staticBlue px-3 py-2 rounded-md text-white`}
                        text='إنشاء حساب'
                    />
                }
                <div className={`px-3`}/>
                <Button
                    action={headerLogic?.login}
                    disabled={false}
                    style={`bg-white border border-staticBlue px-3 py-2 rounded-md text-staticBlue`}
                    text='تسجيل الدخول'
                />
            </div>
            <div className={`block md:hidden`}>
                <Image
                    image={burgerButton}
                    divStyle={`w-[36px] aspect-square `}
                />
            </div>
        </div>
    </div>
  )
}