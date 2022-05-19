import React from 'react'
import Header from './Header'
import SelfAssessmentSection from './SelfAssessmentSection'
import { useEffect } from 'react'

const LandingPage = ({Set_data}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <Header/>
        <SelfAssessmentSection Set_data={Set_data}/>
    </>
  )
}

export default LandingPage