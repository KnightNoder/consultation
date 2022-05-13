import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';

const PerformanceFour = () => {
  const [history_of_heart_issues,Set_history_of_heart_issues] = 
  useState(window.localStorage.getItem('history_of_heart_issues') ||  'No')
  const handleClick = (choice) => {
    Set_history_of_heart_issues(choice)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('history_of_heart_issues',history_of_heart_issues)
  },[history_of_heart_issues])
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" />
            </div>
            <div className='assessment'>
              <h5>Do you have any existing or any history of Heart issues?</h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={history_of_heart_issues} text="Yes"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={history_of_heart_issues}  text="No"/>
            <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={history_of_heart_issues}  
                text="Usually have high blood pressure,
                 but don’t have any heart issue"/>
            <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={history_of_heart_issues}  
                text="My heart beats are usually higher, but no heart problem"
                />
            </div>
        </div>
        <ProceedTemplate text="Proceed" conditionMet="true" choice={"performance-4"} backLink="performance-2"/>
    </>
  )
}

export default PerformanceFour