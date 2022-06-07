import assessmentImage from '../../images/assessment.png'
import CheckBoxCard from '.././CheckBoxCard';
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/WeightLossFour.css';
import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard'

const WeightLossFour = ({saturn_choice,Set_minor_data,Set_weight_data}) => {
  const [disp,Set_disp] = useState(true);
  
  const changeHandler = (name,value) =>{
      if(name == 'No such problems'){
        name = 'No_such_problems'
      }
      if(name == "No_such_problems" && value == false){
        Set_minor_data("weight_management","check_list",{
          "Cholestrol": false,
          "Thyroid":false,
          "Heart":false,
          "Diabetes": false,
          "Kidney":false,
          "No_such_problems": true,
          "Others": false,
          "Others_input":""
        })
      } else {
        Set_weight_data(name,value)
      }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  }, [])

  return (
    <>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Some medical conditions do require a special plan. Help us find you a healthy way to manage your weight
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Do you have any pre-existing problems? </h5>
              <div className={` error-text-checkbox ${!!Object.values(saturn_choice.weight_management.check_list).filter((x)=> x).length ? "not-visible": "visible"}`}>Please answer the question to proceed</div>
              <div className='scroll-div'>
                <CheckBoxCard name="Cholestrol" value={saturn_choice.weight_management.check_list.Cholestrol} onChange={(name,value)=>changeHandler(name,value)}  text="Cholestrol"/>
                <CheckBoxCard name="Thyroid" value={saturn_choice.weight_management.check_list.Thyroid} onChange={(name,value)=>changeHandler(name,value)} text="Thyroid"/>
                <CheckBoxCard name="Heart" onChange={(name,value)=>changeHandler(name,value)} value={saturn_choice.weight_management.check_list.Heart} text="Heart"/>
                <CheckBoxCard name="Diabetes" onChange={(name,value)=>changeHandler(name,value)} value={saturn_choice.weight_management.check_list.Diabetes} text="Diabetes"/>
                <CheckBoxCard name="Kidney" onChange={(name,value)=>changeHandler(name,value)} value={saturn_choice.weight_management.check_list.Kidney} text="Kidney"/>
                <CheckBoxCard name="No_such_problems" onChange={(name,value)=>changeHandler(name,value)} value={saturn_choice.weight_management.check_list.No_such_problems} text="No such problems"/>
                {/* <div className='optional-input' style={{display:"flex", justifyContent: "center",
                  alignItems:"center"
                }}> */}
                <CheckBoxCard name="Others" onChange={(name,value)=>changeHandler(name,value)} value={saturn_choice.weight_management.check_list.Others} text="Others"/>
                <input className='input' name="Others_input" value={saturn_choice.weight_management.check_list.Others_input} disabled={saturn_choice.weight_management.check_list.Others != true}
                onChange={(name,value)=>changeHandler(name,value)} style={{height:"65px"}} type="text" placeholder='Specify the issue' autoComplete='off' />
                {/* </div> */}
              </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"appointment"} vibrateText={()=>{}} backLink="weight-management-2" conditionMet={!!Object.values(saturn_choice.weight_management.check_list).filter((x)=> x).length}/>
    </>
  )
}

export default WeightLossFour