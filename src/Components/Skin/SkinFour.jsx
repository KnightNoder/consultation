import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';

const SkinFour = () => {
  const [selected,SetSelected] = useState('')

  useEffect(() => {
    SetSelected(window.localStorage.getItem('wash_face_frequency'));
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('wash_face_frequency', selected);
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
              <h5>How often you do wash your face in a day? </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected} text="Only while I take bath"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={selected}  text="2 times a day"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={selected}  text="2 - 4 times in a day"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"skin-3"} backLink="skin-2"/>
    </>
  )
}

export default SkinFour