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

const ChoicePage = () => {
  const [selected,SetSelected] = useState('Hairfall')

  const numberCheck = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  useEffect(() => {
    const val = JSON.parse(window.localStorage.getItem('choice'))
    const choiceKey = Object.keys(val)
    SetSelected(choiceKey[0]);
    console.log(choiceKey[0],'choiceKey');
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const key = selected;
    window.localStorage.setItem('choice', JSON.stringify({[key]:{
      'current_condition': null,
      'family_hair_loss':null,
      'past_allergic_reactions':null,
      'big_events':null
    }}));
  }, [selected]);
  
  const handleClick = (choice) => {
    SetSelected(choice)
  }

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>I would like to Assess my </h5>
              <ChoiceCard 
                clickHandler={handleClick} choice={selected} image={hairfallImage} text="Hairfall"/>
              <ChoiceCard 
                clickHandler={handleClick} choice={selected} image={beardImage} text="Beard"/>
              <ChoiceCard 
               clickHandler={handleClick} choice={selected} image={performanceImage} text="Performance"/>
              <ChoiceCard 
               clickHandler={handleClick} choice={selected} image={weightlossImage} text="WeightLoss"/>
              <ChoiceCard 
               clickHandler={handleClick} choice={selected} image={skinImage} text="Skin"/>
              <div className='input-age'>
                <h5 style={{display:"inline-block"}}>Age</h5>
                <span> (Your secret's safe <img src={winkImage} alt="" srcset="" />) </span>
              </div>
              <input className='input' type="text" onKeyPress={numberCheck} placeholder='Eg.24 yrs' />
            </div>
        </div>
          <ProceedTemplate text="Proceed" choice={selected.toLowerCase()} backLink=""/>
    </>
  )
}

export default ChoicePage