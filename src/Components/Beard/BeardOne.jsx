import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';

const BeardOne = () => {
  const [beard_condition,Set_beard_condition] = useState(window.localStorage.getItem('beard_condition') ||  'Patchy Beard')
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('beard_condition',beard_condition);
  }, [beard_condition])

  const handleClick = (choice) => {
    Set_beard_condition(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>Choose a condition that best describes your beard </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={beard_condition} text="Patchy Beard"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={beard_condition}  text="No Beard growth"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={beard_condition}  text="Very less"
               subtext={"(Only moustaches and chin hair)"}/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={beard_condition}  text="Excellent beard"
               subtext={"(need something for beard care)"}/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"beard-1"} backLink="choice" conditionMet="true"/>
    </>
  )
}

export default BeardOne