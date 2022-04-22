import assessmentImage from '../images/assessment.png'
import ProceedTemplate from './ProceedTemplate';
import '../css/ChoicePage.css'
import '../css/BasicInfo.css'
import { useState,useEffect } from 'react';
import { flexbox } from '@mui/system';

const BasicInfo = () => {
  const [nextPage,SetNextPage] = useState('')
  const [details, SetDetails] = useState({
    firstName: "",
    lastName:"",
    phoneNumber:"",
    email:""
  })
 
  const numberCheck = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  const {firstName,lastName,phoneNumber,email} = details;
  const onchange = (e) => {
    SetDetails((prevState) => {
      return {
        ...prevState,[e.target.name]:e.target.value
      }
    })
  }

  useEffect(() => {
    const category = window.localStorage.getItem('choice');
    SetNextPage(category);
    window.scrollTo(0, 0);
  }, [])
  
    // useEffect(() => {
    //   const val = JSON.parse(window.localStorage.getItem('choice'))
    //   console.log(val,'value')
    //   window.localStorage.setItem('choice', JSON.stringify({['Hairfall']:{['current_condition']:selected}}));
    // }, [selected]);

    // const handleClick = (choice) => {
    //   SetSelected(choice)
    // }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt=""  />
            </div>  
            <div className='assessment'>
              <h5>Fill in your basic information </h5>
              <h4>We're just getting to know you better</h4>
              <InputCard heading="First Name" placeholder="Eg. John" name="firstName" onchange={onchange}
              value={firstName} errorText="Invalid input" requiredErrorText="Field is required" required="*" />
              <br />
              <InputCard heading="Last Name" placeholder="Eg. Doe" value={lastName} onchange={onchange}
              errorText="Invalid input" requiredErrorText="Field is required" />
              <br />
              <InputCard heading="Phone"  placeholder="Eg. 9876543210" name="phoneNumber" value={phoneNumber}
              onchange={onchange} errorText="Invalid input" requiredErrorText="Field is required" 
              numberCheck={numberCheck} required="*"/>
              <br />
              <InputCard heading="Email" placeholder="Eg. johndoe@ghc.health" value={email}
              onchange={onchange} errorText="Invalid input" requiredErrorText="Field is required" required="*"/>
              <br />
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={nextPage} backLink="choice"/> 
    </>
  )
}

const InputCard = ({heading,placeholder,errorText,requiredErrorText,required,onchange,numberCheck}) => {
  return (
    <>
      <h3 style={{}}>{heading} 
        <div style={{display:"inline-block",fontSize:"20px",color:"#EA2C2C", marginLeft:"3px"}} className=''>{required}
        </div>
      </h3>
      <input className='input' onChange={onchange} style={{height:"50px", marginTop:"0px"}} 
      type="text" placeholder={placeholder} onKeyPress={numberCheck}/>
      <span style={{visibility:"hidden"}} className='error-text' id="top">
        {errorText}
      </span>
      <span style={{visibility:"hidden"}} className='error-text' id="two">
        {requiredErrorText}
      </span>
    </>
  )
}

export default BasicInfo
