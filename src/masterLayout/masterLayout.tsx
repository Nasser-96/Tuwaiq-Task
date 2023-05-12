import React from 'react'
import Header from './header'
import Footer from './footer'
import { useLocation } from 'react-router-dom'

type Props = 
{
    children:JSX.Element
}

export default function MasterLayout({children}: Props) 
{
  const location = useLocation();
  const isSigupPage = location?.pathname === "/signup";
  
  return (
    <div dir='rtl' className={`overflow-clip bg-white w-full`}>
        <Header isSigupPage={isSigupPage} />
            {children}
          {
            !(isSigupPage)
            &&
              <Footer/>
          }
    </div>
  )
}