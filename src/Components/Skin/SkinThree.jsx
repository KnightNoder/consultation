import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';

const SkinThree = () => {
  const [selected,SetSelected] = useState('')

  useEffect(() => {
    SetSelected(window.localStorage.getItem('ageing'));
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('ageing', selected);
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
              <h5>Please explain your wrinkles/ageing </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="No wrinkles/ ageing"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="I have wrinkles around my eyes or forehead"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="I have a few fine lines of ageing"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"skin-3"} backLink="skin-1"/>
    </>
  )
}

export default SkinThree