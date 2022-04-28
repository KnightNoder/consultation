import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/RadioSwitch.css';
import { useEffect, useState } from 'react';

const BeardThree = () => {
  const [family_beard_growth_issues,Set_family_beard_growth_issues] = 
  useState(window.localStorage.getItem('family_beard_growth_issues') || 'No')

  useEffect(()=>{
    window.localStorage.setItem('family_beard_growth_issues',family_beard_growth_issues);
  },[family_beard_growth_issues])

  const selectStyle = {
    background: "#FF8277",
    color: "white",
    borderRadius: "5px"
  }

  const deselectStyle = {
    background: "#FBFDFE",
    border: "1px solid #CACACA",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  }

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <div className='radio-switch'>
                <div className='heading'>
                  Does anyone in your family have beard growth issues?  
                </div>
                <div className='switch-container'>
                    <div className='switch' name="hairLoss" 
                    style={ (family_beard_growth_issues == "Yes") ? selectStyle : deselectStyle  }
                    onClick={() => Set_family_beard_growth_issues("Yes")}>
                        Yes
                    </div>
                    <div className='switch' 
                        style={ (family_beard_growth_issues == "No") ? selectStyle: deselectStyle  }
                    onClick={() => Set_family_beard_growth_issues("No")}>
                        No
                    </div>
                </div>
              </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"appointment"} backLink="beard-1" conditionMet="true"/>
    </>
  )
}

export default BeardThree