import assessmentImage from '../images/assessment.png'
import ChoiceCard from './ChoiceCard';
import ProceedTemplate from './ProceedTemplate';
import { useState, useEffect } from 'react';

const Appointment = () => {
  const [appointment_type,Set_appointment_type] = useState(window.localStorage.getItem('appointment_type') ||  'Book an appointment')
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('appointment_type',appointment_type);
  }, [appointment_type])

  const handleClick = (choice) => {
    Set_appointment_type(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>Your detailed case has been recorded and our inhouse doctors will review it and get back to you  </h5>
              <p style={{fontSize:"18px", marginTop:"3%"}}>Get in touch with us</p>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={appointment_type} text="Request a call back"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={appointment_type}  text="Book an appointment"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"callback"} directNavigate="true"
         navigateTo="-1" conditionMet="true"/>
    </>
  )
}

export default Appointment