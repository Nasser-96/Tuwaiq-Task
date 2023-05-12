
import { useEffect, useState } from "react";

interface LocalStorageType
{
    set:(key:string, value:string) => void,
    unset:Function,
    get:(key:string) => string,
    getAll:()=>localStorageData,
    destroy:Function
}

export interface localStorageData
{
    firstName:string
    lastName:string
    email:string
    mobile:string
}

export const useLocalStorage = () =>
{

    const set = (key:string, value:string) =>
    {
        const newKey = key?.toLowerCase();
        localStorage.setItem(newKey, value);
        window.dispatchEvent(new Event("storage"));
    }

    const unset = (key: string) =>
    {
        localStorage.removeItem(key);
    }

    const get = (key: string) =>
    {
        return (localStorage.getItem(key) !== undefined && localStorage.getItem(key) !== null) ? localStorage.getItem(key) : undefined;
    }

    const getAll = () =>
    {
        if(typeof window !== "undefined")
        {
            const keys:Array<any> = Object.keys(localStorage);
    
            const values:any = {};
    
            for(var key of keys)
            {           
                values[key] = localStorage.getItem(key);
            }

            return values
        }
    }

    const destroy = () =>
    {
        localStorage.clear();

    }

    return {  set, unset, get,getAll, destroy } as LocalStorageType;
};
