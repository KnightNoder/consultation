import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const PerformanceFive = () => {
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
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"choice"} backLink="performance-3"/>
    </>
  )
}

export default PerformanceFive