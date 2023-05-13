import { useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export const useScroll =()=>
{
    const navigate = useNavigate();
    const location = useLocation();

    const ourNewRef = useRef<any>(null);
    const mostProminentFieldsRef = useRef<any>(null);

    const handleScroll = () => 
    {
        if(location?.pathname !== "/")
        {
            navigate("/");
        }
        else
        {
            ourNewRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    };

    const handleScrollToMostProminentFields = ()=>
    {
        if(location?.pathname !== "/")
        {
            navigate("/");
        }
        else
        {
            mostProminentFieldsRef?.current?.scrollIntoView({behavior: 'smooth'});
        }
    }

    return { mostProminentFieldsRef ,ourNewRef ,handleScroll, handleScrollToMostProminentFields }
}