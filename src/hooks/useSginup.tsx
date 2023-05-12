import { useState } from "react";

export const useSignup = ()=>
{
    const [ firstName, setFirstName ] = useState<string>();
    const [ lastName, setLastName ] = useState<string>();
    const [ email, setEmail ] = useState<string>();
    const [ mobile, setMobile ] = useState<string>();

    return { firstName,lastName, email, mobile };
}