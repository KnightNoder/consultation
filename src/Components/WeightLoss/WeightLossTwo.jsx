import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const WeightLossTwo = () => {
  const [selected,SetSelected] = useState('3 times')
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
              <h5>How often do you eat meals in a day? (including tea, coffee, fruits, salads, snacks)  </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="Greater than 6 times"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="4-6 times"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="3 times"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="Less than 3 times"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weightloss-2"} backLink="weightloss"/>
    </>
  )
}

export default WeightLossTwo