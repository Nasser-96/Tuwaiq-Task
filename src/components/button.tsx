import React from 'react'

type Props = 
{
    style: string;
    text: string;
    action: ()=> void;
    disabled: boolean;
}

export default function Button(props: Props) 
{

  return (
        <button
            onClick={props?.action}
            className={`${props?.style} ${props?.disabled && `cursor-not-allowed`}`}
            disabled={props?.disabled}
        >
            {props?.text}
        </button>
  )
}