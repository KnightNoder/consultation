import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';

const PerformanceOne = () => {
  const [selected,SetSelected] = useState('')
  const handleClick = (choice) => {
    SetSelected(choice)
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>How is your sexual drive over the last one year?</h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="Low"
                subtext="(Don’t feel like doing it)"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="Medium"
                subtext="(sometimes feel/ sometimes don’t)"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="High" 
               subtext="(Regularly feel like doing it)"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"performance-1"} backLink="choice"/>
    </>
  )
}

export default PerformanceOne