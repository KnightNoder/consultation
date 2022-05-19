import ChoiceCard from './ChoiceCard';
import ProceedTemplate from './ProceedTemplate';
import ImageCard from './ImageCard';
import { useEffect } from 'react';

const Appointment = ({saturn_choice,Set_data}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Hey! Your detailed case has been recorded. Wasn’t that easy?</h5>
              <p style={{fontSize:"18px", marginTop:"3%"}}>How would you like us to respond?</p>
              <ChoiceCard 
                clickHandler={() => Set_data("appointment_type","Get a free consultation call")} noImage="true"
                 choice={saturn_choice.appointment_type} value="Get a free consultation call" text="Get a free consultation call"/>
              <ChoiceCard 
                clickHandler={() => Set_data("appointment_type","Proceed without consultation")} noImage="true" 
                choice={saturn_choice.appointment_type}  value="Proceed without consultation" text="Proceed without consultation"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"callback"} directNavigate="true"
         navigateTo="-1" conditionMet="true"/>
    </>
  )
}

export default Appointment