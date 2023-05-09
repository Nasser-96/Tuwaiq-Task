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

    const ourNew = () =>
    {
        console.log("ourNew");
    }

    const mostProminentFields = () =>
    {
        console.log("mostProminentFields");
    }

    const login = ()=>
    {
        console.log("login");
    }
    return { signup, homePage, ourNew, mostProminentFields, login };
}