import ChoiceCard from './ChoiceCard';
import ProceedTemplate from './ProceedTemplate';
import hairfallImage from '../images/hairfall.png'
import beardImage from '../images/beard.png';
import performanceImage from '../images/performance.png'
import weightlossImage from '../images/weightloss.png'
import skinImage from '../images/skin.png'
import '../css/ChoicePage.css'
import '../css/ChoiceCard.css'
import ImageCard from './ImageCard'
import { useState, useEffect } from 'react';  

const ChoicePage = ({saturn_choice,Set_data,Set_minor_data}) => {

  const [vibrate,SetVibrate] = useState(false);
  const [age_valid,Set_age_valid]= useState(false);

  console.log(saturn_choice.user_info,'app state');
  const vibrateText = () => {
    navigator.vibrate(1000)
    SetVibrate(true)
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
    Set_minor_data("user_info","age","")
  }, [])
  
  // useEffect(() => {
  //   SetAge(age)
  //   window.localStorage.setItem('choice',selected);
  //   window.localStorage.setItem('age',age);
  //   SetVibrate(false);
  //   if (/^\d+$/.test(age) &&  parseInt(age) <= 12) {
  //     Set_age_valid(true)
  //   } else {
  //     Set_age_valid(false)
  //   }
  // }, [selected,age]);


  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>I would like to Assess my </h5>
              {/* <ChoiceCard 
                clickHandler={handleClick} choice={selected} noImage="true" image={hairfallImage} text="Hairfall"/>
              <ChoiceCard 
                clickHandler={handleClick} choice={selected} noImage="true" image={beardImage} text="Beard"/>
              <ChoiceCard 
               clickHandler={handleClick} choice={selected} noImage="true" image={performanceImage} text="Performance"/> */}
              {/* <ChoiceCard 
               clickHandler={() => Set_data("category","weight-management")} choice={saturn_choice.category} noImage="true" image={weightlossImage} text="Weight Management" 
               value="weight-management"/> */}
              <ChoiceCard 
               clickHandler={() => Set_data("category","skin")} choice={saturn_choice.category} noImage="true" image={skinImage} text="Skin Health"
               value="skin"/>
              <div className='input-age'>
                <h5 style={{display:"inline-block"}}>Age</h5>
                {/* <span> (Your secret's safe <img src={winkImage} alt=""  />) </span> */}
              </div>
              <input className='input' value={saturn_choice.user_info.age} onChange={(e) => Set_minor_data("user_info","age",e.target.value)} type="text" placeholder='Eg.24' />
              <div className={`error-text ${(vibrate) ? "text-vibrate" : ''} `} style={(!(saturn_choice.user_info.age) || (saturn_choice.user_info.age)>120 || /[a-zA-Z]/.test(saturn_choice.user_info.age))
               ? {visibility:"visible"}: {visibility:"hidden"} }  id="top">
                  Please provide your age to proceed
                  {/* visibility:"hidden" */}
              </div>
            </div>
        </div>
          <ProceedTemplate text="Proceed" choice='user-details' backLink=""
          conditionMet={(saturn_choice.user_info.age)> 0 && (saturn_choice.user_info.age) <= 120} vibrate={vibrate} vibrateText={vibrateText} />
    </>
  )
}

export default ChoicePage