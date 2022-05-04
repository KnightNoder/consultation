import ChoiceCard from './ChoiceCard';
import ProceedTemplate from './ProceedTemplate';
import hairfallImage from '../images/hairfall.png'
import beardImage from '../images/beard.png';
import performanceImage from '../images/performance.png'
import weightlossImage from '../images/weightloss.png'
import skinImage from '../images/skin.png'
import winkImage from '../images/wink.png'
import assessmentImage from '../images/assessment.png'
import '../css/ChoicePage.css'
import '../css/ChoiceCard.css'
import { useState, useEffect } from 'react';  
import { Hidden } from '@mui/material';

const ChoicePage = () => {
  const [selected,SetSelected] = useState(window.localStorage.getItem('choice') || 'Hairfall')
  const [age,SetAge] = useState(window.localStorage.getItem('age') || '')
  const [vibrate,SetVibrate] = useState(false);
  const vibrateText = () => {
    navigator.vibrate(1000)
    SetVibrate(true)
  }
  const numberCheck = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('choice',selected);
    window.localStorage.setItem('age',age);
    SetVibrate(false);
  }, [selected,age]);
  
  const onchange = (e) =>{
    SetAge(e.target.value) 
  }

  const handleClick = (choice) => {
    SetSelected(choice) 
    window.localStorage.setItem('choice',choice)
    if(choice != 'Hairfall'){
      SetAge('')
    }
  }

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt=""  />
            </div>
            <div className='assessment'>
              <h5>I would like to Assess my </h5>
              <ChoiceCard 
                clickHandler={handleClick} choice={selected} noImage="true" image={hairfallImage} text="Hairfall"/>
              <ChoiceCard 
                clickHandler={handleClick} choice={selected} noImage="true" image={beardImage} text="Beard"/>
              <ChoiceCard 
               clickHandler={handleClick} choice={selected} noImage="true" image={performanceImage} text="Performance"/>
              <ChoiceCard 
               clickHandler={handleClick} choice={selected} noImage="true" image={weightlossImage} text="WeightLoss"/>
              <ChoiceCard 
               clickHandler={handleClick} choice={selected} noImage="true" image={skinImage} text="Skin"/>
              <div className='input-age'>
                <h5 style={{display:"inline-block"}}>Age</h5>
                {/* <span> (Your secret's safe <img src={winkImage} alt=""  />) </span> */}
              </div>
              <input  className='input' value={age} onChange={(e) => onchange(e)} type="text" onKeyPress={numberCheck} placeholder='Eg.24' />
              <div className={`error-text ${vibrate ? "text-vibrate" : ''} `} style={(age == '') ? {visibility:"visible"}: {visibility:"hidden"} }  id="top">
                  Please provide your age to proceed
                  {/* visibility:"hidden" */}
              </div>
            </div>
        </div>
          <ProceedTemplate text="Proceed" choice='user-details' backLink=""
          conditionMet={age} vibrate={vibrate} vibrateText={vibrateText} />
    </>
  )
}

export default ChoicePage