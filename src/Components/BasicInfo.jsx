import assessmentImage from '../images/assessment.png'
import ProceedTemplate from './ProceedTemplate';
import '../css/ChoicePage.css'
import '../css/BasicInfo.css'
import ImageCard from './ImageCard'
import { useState,useEffect } from 'react';

const BasicInfo = ({saturn_choice,Set_minor_data}) => {
  const [vibrate_first_name,SetVibrateFirstName] = useState(false);
  const [vibrate_phone,SetVibratePhone] = useState(false);
  const [vibrate_email,SetVibrateEmail] = useState(false);

  const vibrateText = () => {
    navigator.vibrate(1000)
    SetVibrateFirstName(true)
    SetVibrateEmail(true)
    SetVibratePhone(true)
  }


  useEffect(() => {
    window.scrollTo(0, 0);
    Set_minor_data("user_info","first_name","")
    Set_minor_data("user_info","last_name","")
    Set_minor_data("user_info","email","")
    Set_minor_data("user_info","phone_number","")
  }, [])

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
            <ImageCard/>
            </div>  
            <div className='assessment'>
              <h5>Fill in your basic information </h5>
              <h4>We're just getting to know you better</h4>
              <InputCard heading="First Name" placeholder="Eg. John" name="first_name" onchange={(e) => {Set_minor_data("user_info","first_name",e.target.value); SetVibrateFirstName(false)}}
              value={saturn_choice.user_info.first_name} vibrate={vibrate_first_name} errorText="Invalid input" requiredErrorText="Invalid input" required="*" 
               validity={saturn_choice.user_info.first_name}/>
              <br />
              <InputCard heading="Last Name" placeholder="Eg. Doe" value={saturn_choice.user_info.last_name} onchange={(e) => Set_minor_data("user_info","last_name",e.target.value)}
              errorText="Invalid input" vibrate={true} validity={true} />
              <br />
              <InputCard heading="Phone Number"  placeholder="Eg. 9876543210" name="phone_number" value={saturn_choice.user_info.phone_number}
               validity={saturn_choice.user_info.phone_number.length == 10 && /^[0-9]+$/.test(saturn_choice.user_info.phone_number)}
              onchange={(e) => {Set_minor_data("user_info","phone_number",e.target.value);SetVibratePhone(false);}} errorText="Invalid input" requiredErrorText="Invalid input" 
               required="*" vibrate={vibrate_phone}/>
              <br />
              <InputCard heading="Email" placeholder="Eg. johndoe@ghc.health" value={saturn_choice.user_info.email} 
              validity={saturn_choice.user_info.email.includes('@')}
              onchange={(e) => {Set_minor_data("user_info","email",e.target.value);SetVibrateEmail(false)}} errorText="Invalid input"
               requiredErrorText="Invalid Input" required="*" vibrate={vibrate_email}/>
              <br />
            </div>
        </div>
        <ProceedTemplate  vibrate={false} vibrateText={vibrateText} text="Proceed" choice={saturn_choice.category} backLink="choice" 
        conditionMet={saturn_choice.user_info.first_name && saturn_choice.user_info.email.includes('@') && (saturn_choice.user_info.phone_number.length == 10 && /^[0-9]+$/.test(saturn_choice.user_info.phone_number))}
        /> 
    </>
  )
}

const InputCard = ({heading,placeholder,requiredErrorText,value,vibrate, required,onchange,numberCheck,validity}) => {
  return (
    <>
      <h3 style={{}}>{heading} 
        <div style={{display:"inline-block",fontSize:"20px",color:"#EA2C2C", marginLeft:"3px"}} className=''>{required}
        </div>
      </h3>
      <input className='input' onChange={onchange} value={value} 
      type="text" placeholder={placeholder}/>
      <span style={ (vibrate && !validity) ? {visibility:"visible"} : {visibility:"hidden"}} className='error-text' id="two">
        {requiredErrorText}
      </span>
    </>
  )
}

export default BasicInfo
