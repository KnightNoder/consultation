import assessmentImage from '../../images/assessment.png'
import CheckBoxCard from '.././CheckBoxCard';
import ProceedTemplate from '.././ProceedTemplate';
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
      console.log(check_list, 'state')
      console.log(name,value,'event');
      return {...prevState,[name]:value}
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
              <div className='scroll-div'>
                <CheckBoxCard name="Cholestrol" value={check_list.Cholestrol} onChange={(name,value)=>changeHandler(name,value)}  text="Cholestrol"/>
                <CheckBoxCard name="Thyroid" onChange={(e)=>changeHandler(e)} value={check_list.Thyroid} text="Thyroid"/>
                <CheckBoxCard name="Heart" onChange={(e)=>changeHandler(e)} value={check_list.Heart} text="Heart"/>
                <CheckBoxCard name="Diabetes" onChange={(e)=>changeHandler(e)} value={check_list.Diabetes} text="Diabetes"/>
                <CheckBoxCard name="Kidney" onChange={(e)=>changeHandler(e)} value={check_list.Kidney} text="Kidney"/>
                <CheckBoxCard name="No such problems" onChange={(e)=>changeHandler(e)} value={check_list.No_such_problems} text="No such problems"/>
                {/* <div className='optional-input' style={{display:"flex", justifyContent: "center",
                  alignItems:"center"
                }}> */}
                <CheckBoxCard name="Others" value={check_list.Others} text="Others"/>
                <input className='input' name="Others-input" value={check_list.Others_input} style={{height:"65px"}} type="text" placeholder='Specify the issue' />
                {/* </div> */}
              </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"appointment"} backLink="weightloss-2" conditionMet="true"/>
    </>
  )
}

export default WeightLossFour