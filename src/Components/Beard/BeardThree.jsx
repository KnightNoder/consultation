import ProceedTemplate from '.././ProceedTemplate';
import ChoiceCard from '.././ChoiceCard';
import '../../css/RadioSwitch.css';
import '../../css/BeardTwo.css'
import { useEffect, useState } from 'react';

const BeardThree = () => {
  const [family_beard_growth_issues,Set_family_beard_growth_issues] = 
  useState(window.localStorage.getItem('family_beard_growth_issues') || 'No')

  useEffect(()=>{
    window.localStorage.setItem('family_beard_growth_issues',family_beard_growth_issues);
  },[family_beard_growth_issues])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
   
  const handleClickOne = (choice) => {
    Set_family_beard_growth_issues(choice)
  }

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" />
            </div>
             <div className='assessment-container'>
                <div className=''>
                  <h5>Does anyone in your family have beard growth issues? </h5>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={family_beard_growth_issues} text="Yes"/>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={family_beard_growth_issues}  text="No"/>
                  </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"appointment"} backLink="beard-1" conditionMet="true"/>
    </>
  )
}

export default BeardThree