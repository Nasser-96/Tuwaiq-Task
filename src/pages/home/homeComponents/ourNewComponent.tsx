import { Fragment } from "react"

import { ourNewObject } from "../../../hooks/useHome"

import Button from "../../../components/button"

type Props = 
{
    ourNewList:ourNewObject
    viewCourses:()=>void
}

export default function OurNewComponent(props: Props) 
{
    
  return (
        <>
            <div className={`grid grid-cols-3 gap-4 px-64 mt-[400px]`}>
                <div className={`flex items-center w-full`}>
                    <div className={`border border-1 border-grey5 w-full`} />
                    <div className={`h-[40px] border border-l-1 border-grey5`} />
                </div>
                <div className={`flex items-center justify-center w-full text-[48px]/[53.57px] text-staticYellow`}>
                    جديدنا
                </div>
                <div className={`flex items-center w-full`}>
                    <div className={`h-[40px] border border-l-1 border-grey5`}/>
                    <div className={`border border-1 border-grey5 w-full`}/>
                </div>
            </div>
            <div className={`grid grid-cols-3 w-full gap-4 px-64`}>
                <div>
                    <div className={`pt-8 pb-2 text-[28px] leading[31.25px] font-bold`}>
                        {props?.ourNewList?.title}
                    </div>
                    <div className={`text-[20px] font-thin`}>
                        {props?.ourNewList?.sub_title}
                    </div>
                    <div className={``}>
                        {
                            props?.ourNewList?.list?.map((item,index)=>
                            {
                                return(
                                    <Fragment key={index}>
                                        <div className={`flex items-center`}>
                                            <div className={`bg-staticBlue2 h-[12px] w-[12px] me-3 rounded-full`}/>
                                            <div className={`text-[20px] leading[22.32px] font-normal`}>
                                                {item}
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className={``}/>
                </div>
                <div>
                    <div className={`pt-8 pb-2 text-[28px] leading[31.25px] font-bold`}>
                        {props?.ourNewList?.title}
                    </div>
                    <div className={`text-[20px] font-thin`}>
                        {props?.ourNewList?.sub_title}
                    </div>
                    <div className={``}>
                        {
                            props?.ourNewList?.list?.map((item,index)=>
                            {
                                return(
                                    <Fragment key={index}>
                                        <div className={`flex items-center`}>
                                            <div className={`bg-staticBlue2 h-[12px] w-[12px] me-3 rounded-full`}/>
                                            <div className={`text-[20px] leading[22.32px] font-normal`}>
                                                {item}
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className={`pt-8 pb-2 text-[28px] leading[31.25px] font-bold`}>
                        {props?.ourNewList?.title}
                    </div>
                    <div className={`text-[20px] font-thin`}>
                        {props?.ourNewList?.sub_title}
                    </div>
                    <div className={``}>
                        {
                            props?.ourNewList?.list?.map((item,index)=>
                            {
                                return(
                                    <Fragment key={index}>
                                        <div className={`flex items-center`}>
                                            <div className={`bg-staticBlue2 h-[12px] w-[12px] me-3 rounded-full`}/>
                                            <div className={`text-[20px] leading[22.32px] font-normal`}>
                                                {item}
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className={``}/>
                </div>
                <div>
                    <div className={`pt-8 pb-2 text-[28px] leading[31.25px] font-bold`}>
                        {props?.ourNewList?.title}
                    </div>
                    <div className={`text-[20px] font-thin`}>
                        {props?.ourNewList?.sub_title}
                    </div>
                    <div className={``}>
                        {
                            props?.ourNewList?.list?.map((item,index)=>
                            {
                                return(
                                    <Fragment key={index}>
                                        <div className={`flex items-center`}>
                                            <div className={`bg-staticBlue2 h-[12px] w-[12px] me-3 rounded-full`}/>
                                            <div className={`text-[20px] leading[22.32px] font-normal`}>
                                                {item}
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <div className={`flex items-center justify-center w-full`}>
                        <Button
                            action={props?.viewCourses}
                            disabled={false}
                            style={`bg-staticBlue px-3 py-2 rounded-md text-white`}
                            text='إنشاء حساب'
                        />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
  )
}