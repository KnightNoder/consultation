import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const BeardTwo = () => {
  const [selectedOne,SetSelectedOne] = useState('Beard Growth')
  const [selectedTwo,SetSelectedTwo] = useState('I generally shave my beard')
  const handleClickOne = (choice) => {
    SetSelectedOne(choice)
  }
  const handleClickTwo = (choice) => {
    SetSelectedTwo(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div style={{display: "flex",flexDirection:"column",flex:"3", marginRight: "10%"}}>
                <div className='assessment'>
                <h5>What exactly are you looking for?</h5>
                    <ChoiceCard 
                        clickHandler={handleClickOne} noImage="true" choice={selectedOne} text="Beard Growth"/>
                    <ChoiceCard 
                        clickHandler={handleClickOne} noImage="true" choice={selectedOne}  text="Beard Care"/>
                </div>
                <div className='assessment'>
                <h5>How do you trim your beard?</h5>
                    <ChoiceCard 
                        clickHandler={handleClickTwo} noImage="true" choice={selectedTwo} text="I generally shave my beard"/>
                    <ChoiceCard 
                        clickHandler={handleClickTwo} noImage="true" choice={selectedTwo}  text="I use a trimmer to shape it up"/>
                </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"beard-2"} backLink="beard"/>
    </>
  )
}

export default BeardTwo