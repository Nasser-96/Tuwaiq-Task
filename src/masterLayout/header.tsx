import React from 'react';

import { useNavigate } from 'react-router-dom';

import Image from '../components/image';
import Button from '../components/button';

import image_pencil from "../assets/images/pencil.png";

type Props = 
{}

export default function Header({}: Props) 
{
    const navigate = useNavigate()

    const signup = ()=>
    {
        navigate("/signup")
    }

    const homePage = ()=>
    {
        navigate('/')
    }

    const ourNew = () =>
    {
        console.log("ourNew");
    }

    const mostProminentFields = () =>
    {
        console.log("mostProminentFields");
    }

    const login = ()=>
    {
        console.log("login");
    }

  return (
    <div className={`sticky top-0 rounded-md mx-28 bg-white py-4 mt-16 mb-10`}>
        <div className={`flex justify-between items-center`}>
            <div className={`flex items-center`}>
                <Image
                    image={image_pencil}
                    divStyle={`w-[85px] h-[74px]`}
                />
                <div className={`ms-10 cursor-pointer`} onClick={homePage} >
                    الرئيسية
                </div>
                <div className={`ms-10 cursor-pointer`} onClick={ourNew}>
                    جديدنا
                </div>
                <div className={`ms-10 cursor-pointer`} onClick={mostProminentFields}>
                    أبرز المجالات
                </div>
            </div>
            <div className={`flex items-center`}>
                <Button
                    action={signup}
                    disabled={false}
                    style={`bg-staticBlue px-3 py-2 rounded-md text-white`}
                    text='إنشاء حساب'
                />
                <div className={`px-3`}/>
                <Button
                    action={login}
                    disabled={false}
                    style={`bg-white border border-staticBlue px-3 py-2 rounded-md text-staticBlue`}
                    text='تسجيل الدخول'
                />
            </div>
        </div>
    </div>
  )
}