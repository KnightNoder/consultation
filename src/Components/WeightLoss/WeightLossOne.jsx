import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';

const WeightLossOne = () => {
  const [height,SetHeight] = useState(window.localStorage.getItem('height') || '')
  const [weight,SetWeight] = useState(window.localStorage.getItem('weight') || '')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('height',height);
    window.localStorage.setItem('weight',weight);
  },[height,weight])

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
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>Please enter your height and weight below?</h5>
              <input className='input' type="text" onChange={heightCheck} value={height} placeholder='Height(in cms)' />
              <div  style={{visibility:"hidden"}} > Hello</div>
              <input className='input' type="text" onChange={weightCheck} value={weight} placeholder='Weight(in Kgs)' />
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weightloss-1"} backLink="choice" conditionMet="true"/>
    </>
  )
}

export default WeightLossOne