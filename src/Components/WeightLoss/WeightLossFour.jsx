import assessmentImage from '../../images/assessment.png'
import CheckBoxCard from '.././CheckBoxCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const WeightLossFour = () => {
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>Do you have any pre-existing problems? </h5>
              <CheckBoxCard  text="Cholesterol"/>
              <CheckBoxCard  text="Thyroid"/>
              <CheckBoxCard  text="Heart"/>
              <CheckBoxCard  text="Diabetes"/>
              <CheckBoxCard  text="Kidney"/>
              <CheckBoxCard  text="No such problems"/>
              {/* <div className='optional-input' style={{display:"flex", justifyContent: "center",
                alignItems:"center"
              }}> */}
              <CheckBoxCard  text="Others"/>
              <input className='input' style={{height:"65px"}} type="text" placeholder='Specify the issue' />
              {/* </div> */}
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"appointment"} backLink="weightloss-2" conditionMet="true"/>
    </>
  )
}

export default WeightLossFour