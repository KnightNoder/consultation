import ChoiceCard from '../ChoiceCard';
import ProceedTemplate from '../ProceedTemplate';
import { useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinTwo = ({saturn_choice,Set_minor_data}) => {
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Please select your skin texture </h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("skin","skin_texture","Oily")} noImage="true" choice={saturn_choice.skin.skin_texture} value="Oily" text="Oily"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("skin","skin_texture","Dry")} noImage="true" choice={saturn_choice.skin.skin_texture}  value="Dry" text="Dry"/>
              <ChoiceCard 
               clickHandler={() => Set_minor_data("skin","skin_texture","Combined")} noImage="true" choice={saturn_choice.skin.skin_texture}  value="Combined" text="Combined "/>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-2"} backLink="skin"/>
    </>
  )
}

export default SkinTwo