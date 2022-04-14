import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const BeardThree = () => {
  const [selected,SetSelected] = useState('Patchy Beard')
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
              <h5>Does anyone in your family have beard growth issues?</h5>
              
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"beard-2"} backLink="beard-1"/>
    </>
  )
}

export default BeardThree