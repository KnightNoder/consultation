import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useState, useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinFour = ({saturn_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      Set_disp(false)
    }, 2000);
  }, [])

  return (
    <>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Tell us which ingredients affect your skin and we’ll helps you find your skincare match
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Are you allergic to any of the ingredients </h5>
              <ChoiceCard show={disp} 
                clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Vitamin C")} noImage="true"
                 choice={saturn_choice.skin.skin_allergy_to} value="Vitamin C" text="Vitamin C"/>
              <ChoiceCard show={disp} 
                clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Salicylic Acid")} noImage="true" 
                choice={saturn_choice.skin.skin_allergy_to} value="Salicylic Acid" text="Salicylic Acid"/>
              <ChoiceCard show={disp} 
               clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Retinol")} noImage="true" 
               choice={saturn_choice.skin.skin_allergy_to} value="Retinol" text="Retinol"/>
               <ChoiceCard show={disp} 
                clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Niacinamide")} noImage="true" 
                choice={saturn_choice.skin.skin_allergy_to} value="Niacinamide" text="Niacinamide"/>
              <ChoiceCard show={disp} 
               clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Kojic Acid")} noImage="true" 
               choice={saturn_choice.skin.skin_allergy_to} value="Kojic Acid" text="Kojic Acid"/>
               <ChoiceCard show={disp} 
               clickHandler={()=> Set_minor_data("skin","skin_allergy_to","None")} noImage="true" 
               choice={saturn_choice.skin.skin_allergy_to} value="None" text="None"/>
            </div>
            
        </div>
        <ProceedTemplate text="Proceed"  conditionMet="true" choice={"appointment"} backLink="skin-2"/>
    </>
  )
}

export default SkinFour