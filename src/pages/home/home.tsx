import React from 'react';

import { useHome } from '../../hooks/useHome';

import WelcomeComponent from './homeComponents/welcomeComponent';
import OurNewComponent from './homeComponents/ourNewComponent';

type Props = {}

export default function Home({}: Props) 
{
  const homeLogic = useHome();  

  return (
    <div className={``}>
      <WelcomeComponent/>
      <OurNewComponent ourNewList={homeLogic.ourNew} />
    </div>
  )
}