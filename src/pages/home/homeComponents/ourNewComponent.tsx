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
            <div className={`grid grid-cols-3 gap-4 
                px-4
                lg:px-12
                2xl:px-64 mt-[400px]
            `}>
                <div className={`flex items-center w-full`}>
                    <div className={`border border-1 border-grey5 w-full`} />
                    <div className={`h-[40px] border border-l-1 border-grey5`} />
                </div>
                <div className={`flex items-center justify-center w-full text-staticYellow 
                    text-[30px]/[24.55px]
                    2x:text-[48px]/[53.57px]
                `}>
                    جديدنا
                </div>
                <div className={`flex items-center w-full`}>
                    <div className={`h-[40px] border border-l-1 border-grey5`}/>
                    <div className={`border border-1 border-grey5 w-full`}/>
                </div>
            </div>
            <div className={`md:grid md:grid-cols-3 w-full gap-4 
                px-4
                lg:px-12
                2xl:px-64
            `}>
                <div>
                    <div className={`pt-8 pb-2 font-bold
                        text-[20px]
                        2xl:text-[28px]
                         `}>
                        {props?.ourNewList?.title}
                    </div>
                    <div className={`font-thin
                        text-[16px]
                        2xl:text-[20px] 
                    `}>
                        {props?.ourNewList?.sub_title}
                    </div>
                    <div className={``}>
                        {
                            props?.ourNewList?.list?.map((item,index)=>
                            {
                                return(
                                    <Fragment key={index}>
                                        <div className={`flex items-center`}>
                                            <div className={``}>
                                                <div className={`bg-staticBlue2 h-[12px] w-[12px] me-3 rounded-full`}/>
                                            </div>
                                            <div className={`font-normal
                                                text-[15px]
                                                2x:text-[20px]
                                            `}>
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
                    <div className={`pt-8 pb-2 font-bold
                        text-[20px]
                        2xl:text-[28px]
                         `}>
                        {props?.ourNewList?.title}
                    </div>
                    <div className={`font-thin
                        text-[16px]
                        2xl:text-[20px] 
                        `}>
                        {props?.ourNewList?.sub_title}
                    </div>
                    <div className={``}>
                        {
                            props?.ourNewList?.list?.map((item,index)=>
                            {
                                return(
                                    <Fragment key={index}>
                                        <div className={`flex items-center`}>
                                            <div className={``}>
                                                <div className={`bg-staticBlue2 h-[12px] w-[12px] me-3 rounded-full`}/>
                                            </div>
                                            <div className={`font-normal
                                                text-[15px]
                                                2x:text-[20px]
                                            `}>
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
                    <div className={`pt-8 pb-2 font-bold
                        text-[20px]
                        2xl:text-[28px]
                         `}>
                        {props?.ourNewList?.title}
                    </div>
                    <div className={`font-thin
                            text-[16px]
                            2xl:text-[20px] 
                        `}>
                        {props?.ourNewList?.sub_title}
                    </div>
                    <div className={``}>
                        {
                            props?.ourNewList?.list?.map((item,index)=>
                            {
                                return(
                                    <Fragment key={index}>
                                        <div className={`flex items-center`}>
                                            <div className={``}>
                                                <div className={`bg-staticBlue2 h-[12px] w-[12px] me-3 rounded-full`}/>
                                            </div>
                                            <div className={`font-normal
                                                text-[15px]
                                                2x:text-[20px]
                                            `}>
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
                    <div className={`pt-8 pb-2 font-bold
                        text-[20px]
                        2xl:text-[28px]
                         `}>
                        {props?.ourNewList?.title}
                    </div>
                    <div className={`font-thin
                            text-[16px]
                            2xl:text-[20px] 
                        `}>
                        {props?.ourNewList?.sub_title}
                    </div>
                    <div className={``}>
                        {
                            props?.ourNewList?.list?.map((item,index)=>
                            {
                                return(
                                    <Fragment key={index}>
                                        <div className={`flex items-center`}>
                                            <div className={``}>
                                                <div className={`bg-staticBlue2 h-[12px] w-[12px] me-3 rounded-full`}/>
                                            </div>
                                            <div className={`font-normal
                                                text-[15px]
                                                2x:text-[20px]
                                            `}>
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
                    <div className={`flex items-center justify-center w-full mt-10`}>
                        <Button
                            action={props?.viewCourses}
                            disabled={false}
                            style={`bg-staticBlue px-3 py-2 rounded-md text-white`}
                            text='عرض الدورات'
                        />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
  )
}