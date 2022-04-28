import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useEffect, useState } from 'react';

const WeightLossThree = () => {
  const [exercise_a_week,Set_exercise_a_week] = useState(window.localStorage.getItem('exercise_a_week') || 'Daily')

  useEffect(()=>{
    window.scrollTo(0,0);
  })

  useEffect(()=>{
    window.localStorage.setItem('exercise_a_week',exercise_a_week)
  },[exercise_a_week])

  const handleClick = (choice) => {
    Set_exercise_a_week(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>How many days do you exercise in a week?No Judgements here </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={exercise_a_week} text="Don't work out at all"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={exercise_a_week}  text="Daily"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={exercise_a_week}  text="5-6 times a week"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={exercise_a_week}  text="1-2 times a week"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weightloss-3"} backLink="weightloss-1" conditionMet="true"/>
    </>
  )
}

export default WeightLossThree