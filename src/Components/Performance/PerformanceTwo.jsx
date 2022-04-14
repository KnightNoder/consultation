import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const PerformanceTwo = () => {
  const [selected,SetSelected] = useState('No issues in maintaining erection')
  const handleClick = (choice) => {
    SetSelected(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>Do you have a problem getting or maintaining an erection during sex?</h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="No issues in maintaining erection"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="Sometimes, I have issues with maintaining erection"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="Most of the times, I have issues with getting & maintaining an erection"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"performance-2"} backLink="performance"/>
    </>
  )
}

export default PerformanceTwo