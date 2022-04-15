import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';

const BeardOne = () => {
  const [selected,SetSelected] = useState('Patchy Beard')
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
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
              <h5>Choose a condition that best describes your beard </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="Patchy Beard"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="No Beard growth"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="Very less"
               subtext={"(Only moustaches and chin hair)"}/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="Excellent beard"
               subtext={"(need something for beard care)"}/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"beard-1"} backLink="choice"/>
    </>
  )
}

export default BeardOne