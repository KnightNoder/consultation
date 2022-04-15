import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react'; 
import '../../css/BeardTwo.css'

const BeardTwo = () => {
  const [selectedOne,SetSelectedOne] = useState('Beard Growth')
  const [selectedTwo,SetSelectedTwo] = useState('I generally shave my beard')
  const handleClickOne = (choice) => {
    SetSelectedOne(choice)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleClickTwo = (choice) => {
    SetSelectedTwo(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div className='assessment-container'>
                <div className=''>
                  <h5>What exactly are you looking for?</h5>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={selectedOne} text="Beard Growth"/>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={selectedOne}  text="Beard Care"/>
                  </div>
                <div className=''>
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