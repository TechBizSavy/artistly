import React from 'react'
import { Background } from '../components/Background'
import SignupComp from '../components/SignupComp'

const Signup = () => {
  return (
    <div>
      <Background/>
      <div className='max-h-screen pt-10'>
      <SignupComp/>
      </div>
    </div>
  )
}

export default Signup