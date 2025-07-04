import React from 'react'
import { Background } from './components/Background'
import { Appbar } from './components/Appbar'
import { ThreeDMarqueeDemo } from './components/ThreeDMarquee'
import { FeaturesSection } from './components/FeatureSection'
import { SpotlightPreview } from './components/SpotlightPreview'
import Footer from './components/Footer'

const Page = () => {
  return (
    <div>
        <Background/>
        <Appbar/>
        <SpotlightPreview/>
        <ThreeDMarqueeDemo/>
        <FeaturesSection/>
        <Footer/>
    </div>
  )
}

export default Page