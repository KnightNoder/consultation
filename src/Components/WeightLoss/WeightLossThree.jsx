import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const WeightLossThree = () => {
  const [selected,SetSelected] = useState('Daily')
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
              <h5>How many days do you exercise in a week?No Judgements here </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="Don't work out at all"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="Daily"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="5-6 times a week"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="1-2 times a week"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weightloss-3"} backLink="weightloss-1"/>
    </>
  )
}

export default WeightLossThree