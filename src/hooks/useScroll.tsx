import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export const useScroll =()=>
{
    // const navigate = useNavigate();

    const ourNewRef = useRef<any>(null);
    const mostProminentFieldsRef = useRef<any>(null);

    const handleScroll = () => 
    {
        ourNewRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleScrollToMostProminentFields = ()=>
    {
        mostProminentFieldsRef?.current.scrollIntoView({behavior: 'smooth'});
    }

    return { mostProminentFieldsRef ,ourNewRef ,handleScroll, handleScrollToMostProminentFields }
}