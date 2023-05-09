import { ourNewObject } from "../../../hooks/useHome"

type Props = 
{
    ourNewList:Array<ourNewObject>
}

export default function OurNewComponent(props: Props) 
{
  return (
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
  )
}