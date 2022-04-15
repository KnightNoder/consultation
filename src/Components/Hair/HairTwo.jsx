import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/RadioSwitch.css';
import '../../css/ChoicePage.css'
import { useState } from 'react';


const HairOne = () => {
  const [hairLoss,SetHairLoss] = useState(true);
  const [allergy,SetAllergy] = useState(false);
  const [event,SetEvent] = useState(true);

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
                {/* <RadioSwitch  text="Does anyone in your family have hair loss? "/>
                <RadioSwitch  text="Do you have any past allergic reactions to medicines? "/>
                <RadioSwitch  text="Do you have any big events coming up in next 120 days? "/> */}
                <div className='radio-switch'>

                    <div className='heading'>
                    Does anyone in your family have hair loss?
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
                     
                    <div className='heading'>
                    Do you have any past allergic reactions to medicines?
                    </div>
                    <div className='switch-container'>
                        <div className='switch' name="hairLoss" 
                            style={ allergy ? deselectHairStyle : selectHairLossStyle  }
                            onClick={() => SetAllergy(!allergy)}>
                                Yes
                            </div>
                            <div className='switch' 
                                style={ allergy ? selectHairLossStyle: deselectHairStyle  }
                            onClick={() => SetAllergy(!allergy)}>
                                No
                        </div>
                    </div>
                    <div className='heading'>
                    Do you have any big events coming up in next 120 days?
                    </div>
                    <div className='switch-container'>
                        <div className='switch' name="hairLoss" 
                            style={ event ? deselectHairStyle : selectHairLossStyle  }
                            onClick={() => SetEvent(!event)}>
                                Yes
                            </div>
                            <div className='switch' 
                                style={ event ? selectHairLossStyle: deselectHairStyle  }
                            onClick={() => SetEvent(!event)}>
                            No
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProceedTemplate text="Book Appointment" choice={'hairfall-1'} backLink="hairfall"/>
    </>
  )
}

export default HairOne