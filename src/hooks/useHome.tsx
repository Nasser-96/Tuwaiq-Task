import { useEffect, useState } from "react"

import UILearn from '../assets/images/UILearn.png';
import VR_Learn from '../assets/images/VR_Learn.png';
import WebLearn from '../assets/images/WebLearn.png';
import profileImage from '../assets/images/profileImage.png';
import { useLocalStorage } from "./useLocalStorage";

export interface ourNewObject
{
    title:string
    sub_title:string
    list:Array<string>
}

export interface mostProminentFieldArray
{
    title:string
    image:string
}

export interface SaidAboutUsType
{
    name:string
    title:string
    image:string
    details:string
}

export const useHome = ()=>
{
    const localStorage = useLocalStorage();

    const [ ourNew, setNew ] = useState<ourNewObject>({"title":"تصميم وتجربة واجهة المستخدم","sub_title":"سنتعرف في هذهِ الدورة على أساليب وطرق تصميم تجربة المستخدم وتصميم واجهة المستخدم","list":["استكشاف المشاكل التصميمية وإيجاد حلولها","التعرف على التصاميم المبدئية Low-fidelity "]});
    const [ mostProminentFieldsList , setMostProminentFieldsList ] = useState<Array<mostProminentFieldArray>>([{"title": "تصميم وتجربة واجهة المستخدم","image": "سنتعرف في هذهِ الدورة على أساليب وطرق تصميم تجربة المستخدم وتصميم واجهة المستخدم",}]);
    const [ saidAboutUs , setSaidAboutUs ] = useState<Array<SaidAboutUsType>>([{title:"UX/UI Designer",name:"محمد عبدالله",details:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",image:profileImage}]);

    const [ subscribeEmail , setSubscribeEmail ] = useState<string>("")

    useEffect(()=>
    {
        const tempArray = Array.from({length: 10}, (v, i) => 
        {
            return  {
                "title": i%3 === 0 ? "الواقع الافتراضي" : i%2 === 0 ? "تطوير الويب" : "تصميم واجهة المستخدم" ,
                "image": i%3 === 0 ? VR_Learn : i%2 === 0 ? UILearn : WebLearn ,
            }
        } )

        const tempArray2 = Array.from({length: 4}, (v, i) => 
        {
            return  {
                title:"UX/UI Designer",
                name:"محمد عبدالله",
                details:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
                image:profileImage
            }
        } )

        setMostProminentFieldsList(tempArray)
        setSaidAboutUs(tempArray2)
    },[])

    const viewCourses = ()=>
    {
        console.log("View Courses");
    }

    const subscribe = () =>
    {
        localStorage?.set( "subscribe_email", subscribeEmail )
    }

    return { subscribeEmail, ourNew, mostProminentFieldsList , saidAboutUs, viewCourses, setSubscribeEmail, subscribe  }
}