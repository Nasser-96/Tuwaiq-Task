import React from 'react'
import FormComponent from './signupComponents/formComponent'
import WelcomSection from './signupComponents/welcomSection'
import { useSignup } from '../../hooks/useSginup'

type Props = {}

export default function Signup({}: Props) 
{

  const signup = useSignup()

  return (
    <div className='flex justify-center items-center mx-10 my-10'>
        <div className='w-[75%] hidden xl:block'>
            <WelcomSection/>
        </div>
        <div className=''>
          <FormComponent signupData={signup} />
        </div>
    </div>
  )
}