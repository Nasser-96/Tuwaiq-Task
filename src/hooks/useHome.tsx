import { useEffect, useState } from "react"

export interface ourNewObject
{
    title:string
    sub_title:string
    list:Array<string>
}

export const useHome = ()=>
{
    const [ ourNew, setNew ] = useState<Array<ourNewObject>>([{"title":"","sub_title":"","list":[""]}]);

    useEffect(()=>
    {
        const ourNewData = Array.from({length: 4}, (v, i) => 
                {
                    return  {
                        "title": "تصميم وتجربة واجهة المستخدم",
                        "sub_title": "سنتعرف في هذهِ الدورة على أساليب وطرق تصميم تجربة المستخدم وتصميم واجهة المستخدم",
                        "list": ["استكشاف المشاكل التصميمية وإيجاد حلولها","التعرف على التصاميم المبدئية Low-fidelity "]
                    }
                } ) 
        setNew(ourNewData)
    },[])

    return { ourNew }
}