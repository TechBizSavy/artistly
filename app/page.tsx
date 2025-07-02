import React from 'react'
import { Background } from './components/Background'
import { Appbar } from './components/Appbar'
import { MacbookScrollDemo } from './components/MacbookScroll'
// import { BentoGridDemo } from './components/BentoGridDemo'
import { TracingBeamDemo } from './components/TracingBeam'


const Page = () => {
  return (
    <div>
        <Background/>
        <Appbar/>
        <MacbookScrollDemo/>
        {/* <BentoGridDemo/> */}
        <TracingBeamDemo/>
    </div>
  )
}

export default Page