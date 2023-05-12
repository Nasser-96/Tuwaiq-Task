import { useNavigate } from "react-router-dom"

export const useHeader = ()=>
{
    const navigate = useNavigate();

    const signup = ()=>
    {
        navigate("/signup")
    }

    const homePage = ()=>
    {
        navigate('/')
    }

    const ourNew = (scroll:() => void) =>
    {
        scroll();
    }

    const mostProminentFields = (scroll:()=>void) =>
    {
        scroll();
    }

    const login = ()=>
    {
        navigate("/login")
    }
    return { signup, homePage, ourNew, mostProminentFields, login };
}