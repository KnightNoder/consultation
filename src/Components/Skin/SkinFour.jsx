import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinFour = ({saturn_choice,Set_minor_data}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Are you allergic to any of the ingredients </h5>
              <ChoiceCard 
                clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Vitamin C")} noImage="true"
                 choice={saturn_choice.skin.skin_allergy_to} value="Vitamin C" text="Vitamin C"/>
              <ChoiceCard 
                clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Salicylic Acid")} noImage="true" 
                choice={saturn_choice.skin.skin_allergy_to} value="Salicylic Acid" text="Salicylic Acid"/>
              <ChoiceCard 
               clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Retinol")} noImage="true" 
               choice={saturn_choice.skin.skin_allergy_to} value="Retinol" text="Retinol"/>
               <ChoiceCard 
                clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Niacinamide")} noImage="true" 
                choice={saturn_choice.skin.skin_allergy_to} value="Niacinamide" text="Niacinamide"/>
              <ChoiceCard 
               clickHandler={()=> Set_minor_data("skin","skin_allergy_to","Kojic Acid")} noImage="true" 
               choice={saturn_choice.skin.skin_allergy_to} value="Kojic Acid" text="Kojic Acid"/>
               <ChoiceCard 
               clickHandler={()=> Set_minor_data("skin","skin_allergy_to","None")} noImage="true" 
               choice={saturn_choice.skin.skin_allergy_to} value="None" text="None"/>
            </div>
            
        </div>
        <ProceedTemplate text="Proceed"  conditionMet="true" choice={"appointment"} backLink="skin-2"/>
    </>
  )
}

export default SkinFour