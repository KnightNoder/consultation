import assessmentImage from '../images/assessment.png'
import ProceedTemplate from './ProceedTemplate';
import '../css/ChoicePage.css'
import '../css/BasicInfo.css'
import { useState,useEffect } from 'react';
import { flexbox } from '@mui/system';

const BasicInfo = () => {
  const [nextPage,SetNextPage] = useState(window.localStorage.getItem('choice') ||'');
  const [first_name, Set_first_name] = useState(window.localStorage.getItem('first_name' ||  ''));
  const [last_name, Set_last_name] = useState(window.localStorage.getItem('last_name') || '');
  const [phone_number, Set_phone_number] = useState(window.localStorage.getItem('phone_number') || '');
  const [email, Set_email] = useState(window.localStorage.getItem('email') ||'');

  const numberCheck = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
      window.localStorage.setItem('first_name',first_name)
      window.localStorage.setItem('last_name',last_name)
      window.localStorage.setItem('email',email)
      window.localStorage.setItem('phone_number',phone_number)    
  }, [first_name,last_name,email,phone_number,email])

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt=""  />
            </div>  
            <div className='assessment'>
              <h5>Fill in your basic information </h5>
              <h4>We're just getting to know you better</h4>
              <InputCard heading="First Name" placeholder="Eg. John" name="first_name" onchange={(e) => Set_first_name(e.target.value)}
              value={first_name} errorText="Invalid input" requiredErrorText="Field is required" required="*" />
              <br />
              <InputCard heading="Last Name" placeholder="Eg. Doe" value={last_name} onchange={(e) => Set_last_name(e.target.value)}
              errorText="Invalid input" requiredErrorText="Field is required" />
              <br />
              <InputCard heading="Phone"  placeholder="Eg. 9876543210" name="phone_number" value={phone_number}
              onchange={(e) => Set_phone_number(e.target.value)} errorText="Invalid input" requiredErrorText="Field is required" 
              numberCheck={numberCheck} required="*"/>
              <br />
              <InputCard heading="Email" placeholder="Eg. johndoe@ghc.health" value={email}
              onchange={(e) => Set_email(e.target.value)} errorText="Invalid input" requiredErrorText="Field is required" required="*"/>
              <br />
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={nextPage} backLink="choice" conditionMet={first_name && email && phone_number}/> 
    </>
  )
}

const InputCard = ({heading,placeholder,requiredErrorText,value,required,onchange,numberCheck}) => {
  return (
    <>
      <h3 style={{}}>{heading} 
        <div style={{display:"inline-block",fontSize:"20px",color:"#EA2C2C", marginLeft:"3px"}} className=''>{required}
        </div>
      </h3>
      <input className='input' onChange={onchange} style={{height:"50px"}} value={value}
      type="text" placeholder={placeholder} onKeyPress={numberCheck}/>
      <span style={{visibility:"hidden"}} className='error-text' id="two">
        {requiredErrorText}
      </span>
    </>
  )
}

export default BasicInfo
