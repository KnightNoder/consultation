import hairOne from '../../images/hair-one.png'
import hairTwo from '../../images/hair-two.png'
import hairThree from '../../images/hair-three.png'
import hairFour from '../../images/hair-four.png'
import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/ChoicePage.css'
import { useState,useEffect } from 'react';


const HairOne = () => {
    const [selected,SetSelected] = useState('Condition one')

    useEffect(() => {
      window.scrollTo(0,0)
    }, []);

    // useEffect(() => {
    //   const val = JSON.parse(window.localStorage.getItem('choice'))
    //   SetSelected(val['Hairfall']['current_condition']);
    //   window.scrollTo(0, 0);
    // }, [])
  
    // useEffect(() => {
    //   const val = JSON.parse(window.localStorage.getItem('choice'))
    //   console.log(val,'value')
    //   window.localStorage.setItem('choice', JSON.stringify({['Hairfall']:{['current_condition']:selected}}));
    // }, [selected]);

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
              <h5>What is the current condition of your hair and scalp?</h5>
              <ChoiceCard clickHandler={handleClick} choice={selected} image={hairOne} text="Condition one"/>
              <ChoiceCard clickHandler={handleClick} choice={selected} image={hairTwo} text="Condition two"/>
              <ChoiceCard clickHandler={handleClick} choice={selected} image={hairThree} text="Condition three"/>
              <ChoiceCard clickHandler={handleClick} choice={selected} image={hairFour} text="Condition four"/>
              {/* <ChoiceCard text="Hairfall"/>
              <ChoiceCard text="Beard"/>
              <ChoiceCard text="Performance"/>
              <ChoiceCard text="WeightLoss"/>
              <ChoiceCard text="Skin"/> */}
              {/* <div className='input-age'>
                <h5 style={{display:"inline-block"}}>Age</h5>
                <span> (Your secret's safe <img src={winkImage} alt="" srcset="" />) </span>
              </div>
              <input className='input' type="text" placeholder='Eg.24 yrs' /> */}
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={'hairfall-1'} backLink="choice"/>
    </>
  )
}

export default HairOne