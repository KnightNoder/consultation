import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard';

const WeightLossTwo = ({saturn_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  }, [])

  return (
    <>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Eating clean at regular intervals can help you notice changes in your weight management journey
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>How often do you eat meals in a day? </h5>
              <h5>(including tea, coffee, fruits, salads, snacks)  </h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","meals_a_day","Greater than 6 times")} noImage="true" choice={saturn_choice.weight_management.meals_a_day} value="Greater than 6 times" text="Greater than 6 times"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","meals_a_day", "4-6 times")} noImage="true" choice={saturn_choice.weight_management.meals_a_day} value="4-6 times"  text="4-6 times"/>
              <ChoiceCard 
               clickHandler={() => Set_minor_data("weight_management","meals_a_day","3 times")} noImage="true" choice={saturn_choice.weight_management.meals_a_day} value="3 times" text="3 times"/>
              <ChoiceCard 
               clickHandler={() => Set_minor_data("weight_management","meals_a_day", "Less than 3 times")} noImage="true" choice={saturn_choice.weight_management.meals_a_day} value="Less than 3 times" text="Less than 3 times"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-2"} backLink="weight-management" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo