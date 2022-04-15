import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';

const SkinOne = () => {
  const [selected,SetSelected] = useState('')

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  useEffect(() => {
    const val = JSON.parse(window.localStorage.getItem('choice'))
    window.localStorage.setItem('choice', JSON.stringify({['Skin']:{
      ['current_condition']:selected,
      ['acne_frequency']:""
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
              <h5>What is the current condition of your skin? </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="I have acne/pimples"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="I have skin ageing/wrinkles"
                subtext={"(my skin looks old)"}/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="I have tan & dull skin "
               subtext="(i want a glowing skin)"/>
               <div className='optional-input' style={{display:"flex"
              }}>
                  <ChoiceCard input="true" 
                  clickHandler={handleClick} noImage="true" choice={selected}  text="Others"/>
                  <input className='input' style={{height:"65px", marginTop:"6%",marginLeft:"10px"}} type="text" placeholder='Specify the issue' />
               </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"skin-1"} backLink="choice"/>
    </>
  )
}

export default SkinOne