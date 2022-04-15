import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import '../../css/RadioSwitch.css';
import ProceedTemplate from '.././ProceedTemplate';
import { useState } from 'react';

const PerformanceFive = () => {
  const [hairLoss,SetHairLoss] = useState(true)
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
              <h5>Do you experience any cramps or tiredness while performing?</h5>
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
        <ProceedTemplate text="Book Appointment" choice={"choice"} backLink="performance-3"/>
    </>
  )
}

export default PerformanceFive