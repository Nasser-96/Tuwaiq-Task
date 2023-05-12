import React from 'react'

import Button from '../../../components/button'

type Props = 
{
    subscribe:()=> void
}

export default function SubscribeSection(props: Props) 
{
  return (
    <div className={`mt-[400px]`}>
        <div className='w-full flex justify-center items-end relative'>
            <div className={`flex justify-center z-[2] backdrop-blur-[50.5px] rounded-[30px] border border-white 
                px-0 w-[80%] py-12
                2xl:w-[50%] 2xl:p-32
            `}>
                <div className={`flex flex-col justify-center items-center w-full`}>
                    <div className={`text-[#161A57] 
                        text-[28px]
                        2xl:text-[48px]
                    `}>
                        اشترك ليصلك جديدنا!
                    </div>
                    <div className={`mx-10 w-full flex justify-center`}>
                        <input type='text' placeholder={`user@user.com`} className={`p-2 rounded-md w-full border border-[#EBECFA] bg-textWhite 
                            mx-10
                            lg:mx-40
                            xl:mx-60
                            2xl:mx-20
                        `}/>
                    </div>
                    <div className={`mt-4`}>
                        <Button
                            action={props?.subscribe}
                            disabled={false}
                            style={`bg-staticBlue px-3 py-2 rounded-md text-white`}
                            text='اشتراك'
                        />
                    </div>
                </div>
            </div>
            <div className={` aspect-square bg-staticBlue2 absolute rounded-full flex justify-center
                bottom-[70px] w-[250px]
                lg:bottom-[40px] lg:w-[350px]
                2xl:bottom-[100px] 2xl:w-[412px]
            `}/>
        </div>
    </div>
  )
}