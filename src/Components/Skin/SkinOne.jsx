import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';

const SkinOne = () => {
  const [selected,SetSelected] = useState('')

  useEffect(() => {
    const val = JSON.parse(window.localStorage.getItem('choice'))
    SetSelected(val['Skin']['current_condition']);
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const val = JSON.parse(window.localStorage.getItem('choice'))
    window.localStorage.setItem('choice', JSON.stringify({['Skin']:{['current_condition']:selected}}));
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
              <h5>What is the current condition of your skin? </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="I have acne/pimples"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="I have skin ageing/wrinkles"
                subtext={"(my skin looks old)"}/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="I have tan & dull skin "
               subtext="(i want a glowing skin)"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="Others"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"skin-1"} backLink="choice"/>
    </>
  )
}

export default SkinOne