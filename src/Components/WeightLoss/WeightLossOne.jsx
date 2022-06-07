import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';
import ImageCard from '../ImageCard';

const WeightLossOne = ({saturn_choice,Set_minor_data}) => {
  const [vibrate_height,Set_vibrate_height] = useState(false);
  const [vibrate_weight,Set_vibrate_weight] = useState(false);
  const [disp,Set_disp] = useState(true);

  const vibrateText = () => {
    navigator.vibrate(1000);
    Set_vibrate_height(true);
    Set_vibrate_weight(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    Set_minor_data("user_info","height","");
    Set_minor_data("user_info","weight","");
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  }, [])

  const heightCheck = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    Set_minor_data("user_info","height",onlyDigits)
    Set_vibrate_height(false);
  }

  const weightCheck = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    Set_minor_data("user_info","weight",onlyDigits)
    Set_vibrate_weight(false);
  }
  return (
    <>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Answer a few questions so we can help
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5 style={{marginBottom:"3%"}}>Please enter your height and weight below?</h5>
              <input className='input' type="text" onChange={heightCheck} value={saturn_choice.user_info.height} placeholder='Height(in cms)' />
              <span style={ (!saturn_choice.user_info.height && vibrate_height) ? {visibility:"visible"} : {visibility:"hidden"}} className='error-text'>
                  Invalid input
              </span>
              <div  style={{visibility:"hidden", fontSize:"3px"}} > Dummy</div>
              <input className='input' type="text" onChange={weightCheck} value={saturn_choice.user_info.weight} placeholder='Weight(in Kgs)' />
              <span style={ (!saturn_choice.user_info.weight && vibrate_weight) ? {visibility:"visible"} : {visibility:"hidden"}} className='error-text'>
                Invalid input
              </span>
            </div>
        </div>
        <ProceedTemplate text="Proceed" vibrateText={vibrateText} choice={"weight-management-1"} backLink="user-details" conditionMet={saturn_choice.user_info.height && saturn_choice.user_info.weight}/>
    </>
  )
}

export default WeightLossOne