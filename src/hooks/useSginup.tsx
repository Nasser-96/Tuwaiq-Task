import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

export interface SignupType
{
    firstName:string
    lastName:string
    email:string
    mobile:string
    setFirstName:(key:string)=> void
    setLastName:(key:string)=> void
    setEmail:(key:string)=> void
    setMobile:(key:string)=> void
    signUp:()=> void
}
export const useSignup = ()=>
{
    const navigate = useNavigate();

    const localStorage = useLocalStorage();

    const [ firstName, setFirstName ] = useState<string>("");
    const [ lastName, setLastName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ mobile, setMobile ] = useState<string>("");

    const signUp = () =>
    {
        if(email.includes("gmail.com"))
        {
            localStorage?.set("first_name",firstName)
            localStorage?.set("last_name",lastName)
            localStorage?.set("email",email)
            localStorage?.set("mobail",mobile)

            navigate("/")
        }
        else
        {
            alert("يجب ان يحتوي البريد الالكتروني على gmail.com")
        }
    }

    return { firstName,lastName, email, mobile, setFirstName, setLastName, setEmail, setMobile, signUp };
}