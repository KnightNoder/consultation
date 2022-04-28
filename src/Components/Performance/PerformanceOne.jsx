import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import { WindowOutlined } from '@mui/icons-material';

const PerformanceOne = () => {
  const [sexual_drive_over_a_year,Set_sexual_drive_over_a_year] = 
  useState(window.localStorage.getItem('sexual_drive_over_a_year') || 'Low')
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('sexual_drive_over_a_year',sexual_drive_over_a_year)
  },[sexual_drive_over_a_year])

  const handleClick = (choice) => {
    Set_sexual_drive_over_a_year(choice)
  }
  

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>How is your sexual drive over the last one year?</h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={sexual_drive_over_a_year} text="Low"
                subtext="(Don’t feel like doing it)"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={sexual_drive_over_a_year}  text="Medium"
                subtext="(sometimes feel/ sometimes don’t)"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={sexual_drive_over_a_year}  text="High" 
               subtext="(Regularly feel like doing it)"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"performance-1"} backLink="choice" conditionMet="true" />
    </>
  )
}

export default PerformanceOne