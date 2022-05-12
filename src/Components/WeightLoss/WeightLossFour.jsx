import assessmentImage from '../../images/assessment.png'
import CheckBoxCard from '.././CheckBoxCard';
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/WeightLossFour.css';
import { useState } from 'react';

const WeightLossFour = () => {
  const [check_list,Set_check_list] = useState({
    "Cholestrol": true,
    "Thyroid":false,
    "Heart":false,
    "Diabetes": false,
    "Kidney":false,
    "No_such_problems": false,
    "Others": false,
    "Others_input":""
  })

  
  const changeHandler = (name,value) =>{
    Set_check_list((prevState) =>{
      return {...prevState,[name]: !value}
    })
  }

  const inputHandler = (e) => {
    Set_check_list((prevState) =>{
      return {...prevState,[e.target.name]: e.target.value}
    })
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <h5>Do you have any pre-existing problems? </h5>
              <div className={` error-text-checkbox ${!!Object.values(check_list).filter((x)=> x).length ? "not-visible": "visible"}`}>Please answer the question to proceed</div>
              <div className='scroll-div'>
                <CheckBoxCard name="Cholestrol" value={check_list.Cholestrol} onChange={(name,value)=>changeHandler(name,value)}  text="Cholestrol"/>
                <CheckBoxCard name="Thyroid" value={check_list.Thyroid} onChange={(name,value)=>changeHandler(name,value)} text="Thyroid"/>
                <CheckBoxCard name="Heart" onChange={(name,value)=>changeHandler(name,value)} value={check_list.Heart} text="Heart"/>
                <CheckBoxCard name="Diabetes" onChange={(name,value)=>changeHandler(name,value)} value={check_list.Diabetes} text="Diabetes"/>
                <CheckBoxCard name="Kidney" onChange={(name,value)=>changeHandler(name,value)} value={check_list.Kidney} text="Kidney"/>
                <CheckBoxCard name="No_such_problems" onChange={(name,value)=>changeHandler(name,value)} value={check_list.No_such_problems} text="No such problems"/>
                {/* <div className='optional-input' style={{display:"flex", justifyContent: "center",
                  alignItems:"center"
                }}> */}
                <CheckBoxCard name="Others" onChange={(name,value)=>changeHandler(name,value)} value={check_list.Others} text="Others"/>
                <input className='input' name="Others_input" value={check_list.Others_input} 
                onChange={(e) => inputHandler(e)} style={{height:"65px"}} type="text" placeholder='Specify the issue' />
                {/* </div> */}
              </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"appointment"} vibrateText={()=>{}} backLink="weightloss-2" conditionMet={!!Object.values(check_list).filter((x)=> x).length}/>
    </>
  )
}

export default WeightLossFour