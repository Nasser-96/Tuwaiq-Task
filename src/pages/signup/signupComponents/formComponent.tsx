import { useNavigate } from 'react-router-dom'

import { SignupType } from '../../../hooks/useSginup'

import Button from '../../../components/button'

type Props = 
{
    signupData:SignupType
}

export default function FormComponent(props: Props) 
{
    const symbolsArr =["e", "E", "+", "-", "."];

    const navigate = useNavigate()

    const handleEmailchange = (e:any)=>
    {
        if(props?.signupData?.email?.length > 0 && !(props?.signupData?.email?.includes("gmail.com")))
        {
            props?.signupData?.setError("يجب ان يحتوي البريد الالكتروني على gmail.com")
        }
        props?.signupData?.setEmail(e.target?.value)
    }

    const handleChange = (event:any) => 
    {
        
        if(!(props?.signupData?.mobile?.length === 0 && event.target.value !== "0" ))
        {
            props?.signupData?.setMobile(event.target.value.slice(0, 10));
        }
    };

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
                    onChange={(e)=>props?.signupData?.setFirstName(e.target?.value)}
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
                    onChange={(e)=>props?.signupData?.setLastName(e.target?.value)}
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
                    onChange={handleEmailchange}
                />
                {
                    props?.signupData?.email?.length > 0 && !(props?.signupData?.email?.includes("gmail.com"))
                    && 
                    <div className={`text-[15px] text-[#DB3B21]`}>
                        {props?.signupData?.error}
                    </div>
                }
            </div>
            <div className={`mt-4`}>
                <div className={`text-[20px]`}>
                    رقم الجوال
                </div>
                <input 
                    type='number'
                    placeholder={`مثال : 0123456789`}
                    maxLength={10}
                    className={`p-2 rounded-md w-full border border-[#EBECFA] bg-textWhite text-[14px] sm:text-[20px]`}
                    onChange={handleChange}
                    value={props?.signupData?.mobile}
                    onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()}
                />
            </div>
        </div>
        <div className={`flex flex-col w-full items-center justify-center my-4`}>
            <Button
                action={props?.signupData?.signUp}
                disabled={!((props?.signupData?.email?.includes("gmail.com")) && props?.signupData?.firstName && props?.signupData?.lastName && props?.signupData?.mobile )}
                style={`bg-staticBlue px-3 py-2 rounded-md text-white`}
                text='تسجيل الدخول'
            />
            <div className={`flex mt-3`}>
                <div>
                    لديك حساب؟
                </div>
                <div className={`ms-2 text-staticBlue cursor-pointer`} onClick={()=>navigate("/login")}>
                    تسجيل الدخول
                </div>
            </div>
        </div>
    </div>
  )
}