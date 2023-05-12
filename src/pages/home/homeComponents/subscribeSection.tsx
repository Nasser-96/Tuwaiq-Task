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
            <div className={`flex justify-center p-32 z-[2] backdrop-blur-[50.5px] rounded-md border border-white w-[50%]`}>
                <div className={`flex flex-col justify-center items-center w-full`}>
                    <div className={`text-[48px] text-[#161A57]`}>
                        اشترك ليصلك جديدنا!
                    </div>
                    <div className={`mx-10 w-full flex justify-center`}>
                        <input type='text' placeholder={`user@user.com`} className={`p-2 rounded w-full border border-[#EBECFA] bg-textWhite mx-20`}/>
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
            <div className={`w-[412px] aspect-square bg-staticBlue2 absolute bottom-[100px] rounded-full flex justify-center`}/>
        </div>
    </div>
  )
}