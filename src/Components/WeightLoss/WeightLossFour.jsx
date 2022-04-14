import assessmentImage from '../../images/assessment.png'
import CheckBoxCard from '.././CheckBoxCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const WeightLossFour = () => {
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>Do you have any pre-existing problems? </h5>
              <CheckBoxCard  text="Cholesterol"/>
              <CheckBoxCard  text="Thyroid"/>
              <CheckBoxCard  text="Heart"/>
              <CheckBoxCard  text="Diabetes"/>
              <CheckBoxCard  text="Kidney"/>
              <CheckBoxCard  text="No such problems"/>
              <CheckBoxCard  text="Others"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weightloss-3"} backLink="weightloss-2"/>
    </>
  )
}

export default WeightLossFour