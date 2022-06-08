import ChoiceCard from '../ChoiceCard';
import ProceedTemplate from '../ProceedTemplate';
import { useState,useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinTwo = ({saturn_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(true);
  useEffect(() => {
    window.scrollTo(0,0);
    setTimeout(() => {
      Set_disp(false)
    }, 5000);
  }, []);
  
  return (
    <>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Skin concerns are unique to each individual and one needs the right care to keep up with good skin health
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Describe your skin type</h5>
              <ChoiceCard show={disp} 
                clickHandler={() => Set_minor_data("skin","skin_texture","Oily")} noImage="true" choice={saturn_choice.skin.skin_texture} value="Oily" text="Oily"/>
              <ChoiceCard show={disp} 
                clickHandler={() => Set_minor_data("skin","skin_texture","Dry")} noImage="true" choice={saturn_choice.skin.skin_texture}  value="Dry" text="Dry"/>
              <ChoiceCard show={disp} 
               clickHandler={() => Set_minor_data("skin","skin_texture","Normal")} noImage="true" choice={saturn_choice.skin.skin_texture}  value="Normal" text="Normal "/>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-2"} backLink="skin"/>
    </>
  )
}

export default SkinTwo