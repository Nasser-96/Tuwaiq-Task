import React from 'react'
import Header from './header'
import Footer from './footer'

type Props = 
{
    children:JSX.Element
}

export default function MasterLayout({children}: Props) 
{
  return (
    <div dir='rtl' className={`overflow-clip bg-white w-full`}>
        <Header/>
            {/* {children} */}
        <Footer/>
    </div>
  )
}