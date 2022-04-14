import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const PerformanceThree = () => {
  const [selected,SetSelected] = useState('No issues with ejaculation')
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
              <h5>Which of the following is the case with you??</h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="Ejaculate too early during performance"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="No issues with ejaculation"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"performance-3"} backLink="performance-1"/>
    </>
  )
}

export default PerformanceThree