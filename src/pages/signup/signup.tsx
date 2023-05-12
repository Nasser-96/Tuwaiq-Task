import React from 'react'
import FormComponent from './signupComponents/formComponent'
import WelcomSection from './signupComponents/welcomSection'

type Props = {}

export default function Signup({}: Props) 
{
  // signup 

  return (
    <div className='flex justify-center items-center mx-10 my-10'>
        <div className='w-[75%] hidden xl:block'>
            <WelcomSection/>
        </div>
        <div className=''>
          <FormComponent/>
        </div>
    </div>
  )
}