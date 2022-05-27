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
  const [disp,Set_disp] = useState(true);
  const [vibrate,SetVibrate] = useState(false);

  const vibrateText = () => {
    navigator.vibrate(1000)
    SetVibrateFirstName(true)
    SetVibrateEmail(true)
    SetVibratePhone(true)
    SetVibrate(true)
  }

  const numberCheck = (e)  => {
            var key;
            var keychar;

            if (window.event)
                key = window.event.keyCode;
            else if (e)
                key = e.which;
            else
                return true;
            keychar = String.fromCharCode(key);

            // control keys
            if ((key==0) || (key==8) || (key==9) || (key==13) || (key==27) ||
            (key == 37) ||  (key == 39) || (key == 46) )
                return true;

            // numbers
            else if ((("0123456789").indexOf(keychar) > -1))
                return true;
            else
                e.preventDefault()
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    Set_minor_data("user_info","first_name","")
    Set_minor_data("user_info","last_name","")
    Set_minor_data("user_info","email","")
    Set_minor_data("user_info","phone_number","")
    Set_minor_data("user_info","age","")
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  }, [])

  return (
    <>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
            We will need your contact details to reach out for the consultation
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
            <ImageCard/>
            </div>  
            <div className='assessment'>
              <h5>Fill up the details below :</h5>
              <InputCard heading="First Name" placeholder="Eg. John" name="first_name" onchange={(e) => {Set_minor_data("user_info","first_name",e.target.value); SetVibrateFirstName(false)}}
              value={saturn_choice.user_info.first_name} vibrate={vibrate_first_name} errorText="Invalid input" requiredErrorText="Please provide name to proceed" required="*" 
               validity={saturn_choice.user_info.first_name}/>
              <br />
              <InputCard heading="Last Name" placeholder="Eg. Doe" value={saturn_choice.user_info.last_name} onchange={(e) => Set_minor_data("user_info","last_name",e.target.value)}
              errorText="Invalid input" vibrate={true} validity={true} />
              <br />
              <InputCard heading="Phone Number"  placeholder="Eg. 9876543210" name="phone_number" value={saturn_choice.user_info.phone_number}
              inputMode="numeric" validity={saturn_choice.user_info.phone_number.length == 10} numberCheck={numberCheck}
              onchange={(e) => {Set_minor_data("user_info","phone_number",e.target.value);SetVibratePhone(false)}} errorText="Invalid input" requiredErrorText="Please provide valid phone number to proceed" 
               required="*" vibrate={vibrate_phone}/>
              <br />
              <InputCard heading="Email" placeholder="Eg. johndoe@ghc.health" value={saturn_choice.user_info.email} 
              validity={saturn_choice.user_info.email.includes('@')}
              onchange={(e) => {Set_minor_data("user_info","email",e.target.value);SetVibrateEmail(false)}} errorText="Invalid input"
               requiredErrorText="Please provide valid email to proceed" required="*" vibrate={vibrate_email}/>
              <br />
              <InputCard heading="Age" placeholder="Eg. 24" value={saturn_choice.user_info.age} 
              validity={saturn_choice.user_info.age && saturn_choice.user_info.age <= 149} inputMode="numeric" numberCheck={numberCheck}
              onchange={(e) => {Set_minor_data("user_info","age",e.target.value);SetVibrate(false)}} errorText="Invalid input"
               requiredErrorText="Please provide valid age to proceed" required="*" vibrate={vibrate}/>
              <br />
            </div>
        </div>
        <ProceedTemplate  vibrate={false} vibrateText={vibrateText} text="Proceed" choice={saturn_choice.category} backLink="choice" 
        conditionMet={saturn_choice.user_info.first_name && saturn_choice.user_info.email.includes('@') && (saturn_choice.user_info.phone_number.length == 10 && /^[0-9]+$/.test(saturn_choice.user_info.phone_number))
        && (saturn_choice.user_info.age && saturn_choice.user_info.age <= 149)}
        /> 
    </>
  )
}

const InputCard = ({heading,placeholder,requiredErrorText,value,vibrate, required,onchange,inputMode,validity,numberCheck}) => {
  return (
    <>
      <h3 style={{}}>{heading} 
        <div style={{display:"inline-block",fontSize:"20px",color:"#EA2C2C", marginLeft:"3px"}} className=''>{required}
        </div>
      </h3>
      <input className='input' onChange={onchange} value={value} inputMode={inputMode}
      type="text" placeholder={placeholder} onKeyDown={numberCheck}/> 
      <span style={ (vibrate && !validity) ? {visibility:"visible"} : {visibility:"hidden"}} className='error-text' id="two">
        {requiredErrorText}
      </span>
    </>
  )
}

export default BasicInfo
