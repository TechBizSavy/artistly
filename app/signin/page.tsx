import React from 'react'
import { Background } from '../components/Background'
import SigninComp from '../components/SigninComp'

const Signin = () => {
  return (
    <div>
        <Background/>
        <div className='pt-20'>
        <SigninComp/>
        </div>
    </div>
  )
}

export default Signin