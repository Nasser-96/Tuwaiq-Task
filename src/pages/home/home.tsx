import React from 'react';

import { useHome } from '../../hooks/useHome';

import WelcomeComponent from './homeComponents/welcomeComponent';
import OurNewComponent from './homeComponents/ourNewComponent';
import MostProminentFields from './homeComponents/mostProminentFields';
import SaidAboutUs from './homeComponents/saidAboutUs';
import SubscribeSection from './homeComponents/subscribeSection';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type Props = 
{
  ourNewRef:any
  mostProminentFieldsRef:any
}

export default function Home(props: Props) 
{

  const homeLogic = useHome();
  const localStorage = useLocalStorage()
    
  return (
    <div className={``}>
      <WelcomeComponent/>
      <div ref={props?.ourNewRef}>
        <OurNewComponent ourNewList={homeLogic.ourNew} viewCourses={homeLogic?.viewCourses} />
      </div>
      <div ref={props?.mostProminentFieldsRef}>
        <MostProminentFields mostProminentFieldsList={homeLogic.mostProminentFieldsList}/>
      </div>
      <SaidAboutUs saydAboutUs={homeLogic?.saidAboutUs}/>
      <SubscribeSection  setSubscribeEmail={homeLogic?.setSubscribeEmail} subscribe={homeLogic?.subscribe}/>
    </div>
  )
}