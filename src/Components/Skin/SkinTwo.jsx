import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '../ChoiceCard';
import ProceedTemplate from '../ProceedTemplate';
import { useState,useEffect } from 'react';

const SkinTwo = () => {
  const [selected,SetSelected] = useState('')
  
  useEffect(() => {
    const val = JSON.parse(window.localStorage.getItem('choice'))
    SetSelected(val['Skin']['acne_frequency']);
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const val = JSON.parse(window.localStorage.getItem('choice'))
    window.localStorage.setItem('choice', JSON.stringify(
      {
        ['Skin']:{
          ['acne_frequency']:selected
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
              <h5>What is the frequency of your acne?? </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="Once in a week"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="Once in a month or 2 months"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="Always have acne"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="Very rarely"/>
               <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="No acne"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"skin-2"} backLink="skin"/>
    </>
  )
}

export default SkinTwo