import React from 'react'

import { mostProminentFieldArray } from '../../../hooks/useHome'

import Image from '../../../components/image'

type Props = 
{
    mostProminentFieldsList: Array<mostProminentFieldArray>
}

export default function MostProminentFields(props: Props) 
{
  return (
    <div>
        <div className={`grid grid-cols-3 gap-4 mt-[200px]
            px-4
            sm:px-8
            2xl:px-64
        `}>
            <div className={`flex items-center w-full`}>
                <div className={`border border-1 border-grey5 w-full`} />
                <div className={`h-[40px] border border-l-1 border-grey5`} />
            </div>
            <div className={`flex items-center justify-center w-full text-staticYellow
                text-[22px]
                sm:text-[28px]
                md:text-[36px]
                2xl:text-[48px]/[53.57px]
            `}>
                ابرز المجالات
            </div>
            <div className={`flex items-center w-full`}>
                <div className={`h-[40px] border border-l-1 border-grey5`}/>
                <div className={`border border-1 border-grey5 w-full`}/>
            </div>
        </div>
        <div className={`flex overflow-x-scroll w-full mt-10`}>
            {props?.mostProminentFieldsList?.map((item, index)=>
            {
                return(
                        <div key={index} className='bg-textWhite mx-4 rounded-md'>
                            <Image divStyle='w-[252px] aspect-square' image={item?.image}/>
                            <div className={`flex items-center text-staticBlue p-4 font-[900] justify-center text-[20px]`}>
                                {item?.title}
                            </div>
                        </div>
                )
            })}
        </div>
    </div>
  )
}