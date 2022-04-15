import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/RadioSwitch.css';
import { useState } from 'react';

const BeardThree = () => {
  const [hairLoss,SetHairLoss] = useState('true')
  const handleClick = (choice) => {
    SetHairLoss(choice)
  }

  const selectHairLossStyle = {
    background: "#FF8277",
    color: "white",
    borderRadius: "5px"
  }

  const deselectHairStyle = {
    background: "#FBFDFE",
    border: "1px solid #CACACA",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  }

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src={assessmentImage} className='image' alt="" srcset="" />
            </div>
            <div className='assessment'>
              <div className='radio-switch'>
                <div className='heading'>
                  Does anyone in your family have beard growth issues?  
                </div>
                <div className='switch-container'>
                    <div className='switch' name="hairLoss" 
                    style={ hairLoss ? deselectHairStyle : selectHairLossStyle  }
                    onClick={() => SetHairLoss(!hairLoss)}>
                        Yes
                    </div>
                    <div className='switch' 
                        style={ hairLoss ? selectHairLossStyle: deselectHairStyle  }
                    onClick={() => SetHairLoss(!hairLoss)}>
                        No
                    </div>
                </div>
              </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"beard-2"} backLink="beard-1"/>
    </>
  )
}

export default BeardThree