import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const PerformanceFour = () => {
  const [selected,SetSelected] = useState('No')
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
              <h5>Do you have any existing or any history of Heart issues?</h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="Yes"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="No"/>
            <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  
                text="Usually have high blood pressure,
                 but don’t have any heart issue"/>
            <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  
                text="My heart beats are usually higher, but no heart problem"
                />
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"performance-4"} backLink="performance-2"/>
    </>
  )
}

export default PerformanceFour