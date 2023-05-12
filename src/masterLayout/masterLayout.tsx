import React from 'react'
import Header from './header'
import Footer from './footer'
import { useLocation } from 'react-router-dom'

type Props = 
{
    scrollToourNewRef:() =>void
    handleScrollToMostProminentFields:() =>void
    children:JSX.Element
}

export default function MasterLayout(props: Props) 
{
  const location = useLocation();
  const isSigupPage = location?.pathname === "/signup";
  
  return (
    <div dir='rtl' className={`overflow-clip bg-white w-full`}>
        <Header handleScrollToMostProminentFields={props?.handleScrollToMostProminentFields} isSigupPage={isSigupPage} scrollToourNewRef={props?.scrollToourNewRef} />
            {props?.children}
          {
            !(isSigupPage)
            &&
              <Footer handleScrollToMostProminentFields={props?.handleScrollToMostProminentFields} scrollToourNewRef={props?.scrollToourNewRef}/>
          }
    </div>
  )
}