import React from 'react'

type Props = 
{
    image:any
    divStyle?:string
    imageStyle?:string
}

export default function Image(props: Props) 
{    
  return (
    <div className={`${props?.divStyle}`}>
        <img className={`${props?.imageStyle}`} src={props?.image?.name ? URL.createObjectURL(props?.image) : props?.image}/>
    </div>
  )
}