import React from 'react'
import Button from '../../../components/button'

type Props = {}

export default function FormComponent({}: Props) 
{

  return (
    <div className={``}>
        <div className={`text-center`}>
            <div className={`font-extrabold
                text-[28px]
                sm:text-[48px]
            `}>
                إنشاء حساب
            </div>
            <div className={`text-[16px] sm:text-[48px]`}>
                انشئ حسابك واكتسب المزيد من التعليم
                والمهارات الجديدة!
            </div>
        </div>
        <div>
            <div className={`mt-4`}>
                <div className={`text-[14px] sm:text-[20px]`}>
                    الاسم الاول
                </div>
                <input 
                    type='text' 
                    placeholder={`مثال: ناصر`} 
                    className={`p-2 rounded-md w-full border border-[#EBECFA] bg-textWhite text-[14px] sm:text-[20px]`}
                />
            </div>
            <div className={`mt-4`}>
                <div className={`text-[20px] text-[14px] sm:text-[20px]`}>
                    الاسم الاخير
                </div>
                <input 
                    type='text' 
                    placeholder={`مثال: ابوناصر`} 
                    className={`p-2 rounded-md w-full border border-[#EBECFA] bg-textWhite text-[14px] sm:text-[20px]`}
                />
            </div>
            <div className={`mt-4`}>
                <div className={`text-[20px] text-[14px] sm:text-[20px]`}>
                    البريد الالكتروني
                </div>
                <input 
                    type='email' 
                    placeholder={`user@user.com`} 
                    className={`p-2 rounded-md w-full border border-[#EBECFA] bg-textWhite text-[14px] sm:text-[20px]`}
                />
            </div>
            <div className={`mt-4`}>
                <div className={`text-[20px]`}>
                    رقم الجوال
                </div>
                <input 
                    type='number' 
                    placeholder={`مثال : 0123456789`}
                    maxLength={10}
                    minLength={10}
                    className={`p-2 rounded-md w-full border border-[#EBECFA] bg-textWhite text-[14px] sm:text-[20px]`}
                />
            </div>
        </div>
        <div className={`flex flex-col w-full items-center justify-center my-4`}>
            <Button
                action={()=>""}
                disabled={false}
                style={`bg-staticBlue px-3 py-2 rounded-md text-white`}
                text='تسجيل الدخول'
            />
            <div className={`flex`}>
                <div>
                    لديك حساب؟
                </div>
                <div className={`ms-2 text-staticBlue cursor-pointer`}>
                    تسجيل الدخول
                </div>
            </div>
        </div>
    </div>
  )
}