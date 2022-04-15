import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';

const WeightLossOne = () => {
  const [height,SetHeight] = useState('')
  const [weight,SetWeight] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const heightCheck = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    SetHeight(onlyDigits)
  }

  const weightCheck = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    SetWeight(onlyDigits)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>Please enter your height and weight below?</h5>
              <input className='input' type="text" onChange={heightCheck} value={height} placeholder='Height(in cms)' />
              <br />
              <input className='input' type="text" onChange={weightCheck} value={weight} placeholder='Weight(in Kgs)' />
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weightloss-1"} backLink="choice"/>
    </>
  )
}

export default WeightLossOne