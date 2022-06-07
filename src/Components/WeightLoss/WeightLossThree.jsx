import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard';
const WeightLossThree = ({saturn_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(true);

  useEffect(()=>{
    window.scrollTo(0,0);
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  },[])

  return (
    <>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Your metabolism is quite “adaptable.” It will adjust based on what you do in your daily life.
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>How many days do you exercise in a week?</h5>
              <h5>(no judgements here)</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","exercise_a_week","Don't work out at all")} noImage="true" choice={saturn_choice.weight_management.exercise_a_week} 
                value="Don't work out at all" text="Don't work out at all"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","exercise_a_week","Daily")} noImage="true" choice={saturn_choice.weight_management.exercise_a_week}  
                value="Daily" text="Daily"/>
              <ChoiceCard 
               clickHandler={() => Set_minor_data("weight_management","exercise_a_week","5-6 times a week")} noImage="true" choice={saturn_choice.weight_management.exercise_a_week}  
               value="5-6 times a week" text="5-6 times a week"/>
              <ChoiceCard 
               clickHandler={() => Set_minor_data("weight_management","exercise_a_week","1-2 times a week")} noImage="true" choice={saturn_choice.weight_management.exercise_a_week}  
               value="1-2 times a week" text="1-2 times a week"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-3"} backLink="weight-management-1" conditionMet="true"/>
    </>
  )
}

export default WeightLossThree