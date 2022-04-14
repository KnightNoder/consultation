import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const WeightLossOne = () => {
  const numberCheck = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>Please enter your height and weight below?</h5>
              <input className='input' type="text" onKeyPress={numberCheck} placeholder='Height(in cms)' />
              <br />
              <input className='input' type="text" onKeyPress={numberCheck} placeholder='Weight(in Kgs)' />
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weightloss-1"} backLink="choice"/>
    </>
  )
}

export default WeightLossOne