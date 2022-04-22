import React from 'react'
import search from '../images/search.png'
import '../css/Appointment.css'
import gif from '../images/gif.gif';
import {useNavigate} from "react-router-dom"

const Appointment = () => {
  const navigate = useNavigate()
  return (
    <>
        <div className='recommendations-container'>
            <div className='image-container'>
                <img className='image' src={gif} alt="" />
            </div>
            <div className='review-heading'>
                Your detailed case has been recorded and our inhouse 
                doctors will review it and get back to you. 
            </div>
            <div className='subtext'>
                Get in touch with us
            </div>
            <div className='buttons-container'>
                <div className='button' onClick={() => navigate('/callback')}>
                    Request a call back 
                </div>
                <div className='button' onClick={() => navigate('/book')}>
                    Book an appointment
                </div>
            </div>
        </div>
    </>
    )
}

export default Appointment