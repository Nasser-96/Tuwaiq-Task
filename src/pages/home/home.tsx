import React from 'react';

import { useHome } from '../../hooks/useHome';

import WelcomeComponent from './homeComponents/welcomeComponent';
import OurNewComponent from './homeComponents/ourNewComponent';
import MostProminentFields from './homeComponents/mostProminentFields';
import SaidAboutUs from './homeComponents/saidAboutUs';

type Props = {}

export default function Home({}: Props) 
{

  const homeLogic = useHome();  

  return (
    <div className={``}>
      <WelcomeComponent/>
      <OurNewComponent ourNewList={homeLogic.ourNew} viewCourses={homeLogic?.viewCourses} />
      <MostProminentFields mostProminentFieldsList={homeLogic.mostProminentFieldsList}/>
      <SaidAboutUs saydAboutUs={homeLogic?.saidAboutUs}/>
    </div>
  )
}