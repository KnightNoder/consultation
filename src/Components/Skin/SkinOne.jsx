import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinOne = ({saturn_choice,Set_minor_data}) => {

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
              <h5>Please select your skin concern </h5>
              <div className='scroll-div'>
                <ChoiceCard 
                  clickHandler={() => Set_minor_data("skin","skin_concern","Open pores")} noImage="true" choice={saturn_choice.skin.skin_concern} value="Open pores" text="Open pores"/>
                <ChoiceCard 
                  clickHandler={() => Set_minor_data("skin","skin_concern","Pigmentation")} noImage="true" choice={saturn_choice.skin.skin_concern} value="Pigmentation"  text="Pigmentation"/>
                <ChoiceCard 
                clickHandler={() => Set_minor_data("skin","skin_concern","Active Acne")} noImage="true" choice={saturn_choice.skin.skin_concern} value="Active Acne" text="Active Acne"/>
                <ChoiceCard 
                clickHandler={() => Set_minor_data("skin","skin_concern","Aging")} noImage="true" choice={saturn_choice.skin.skin_concern} value="Aging" text="Aging"/>
                <ChoiceCard 
                clickHandler={() => Set_minor_data("skin","skin_concern","Dark circles")} noImage="true" choice={saturn_choice.skin.skin_concern} value="Dark circles" text="Dark circles"/>
                <ChoiceCard 
                clickHandler={() => Set_minor_data("skin","skin_concern","Acne marks & spots")} noImage="true" choice={saturn_choice.skin.skin_concern} value="Acne marks & spots"  text="Acne marks & spots"/>
                <ChoiceCard 
                clickHandler={() => Set_minor_data("skin","skin_concern","Dull Skin")} noImage="true" choice={saturn_choice.skin.skin_concern} value="Dull Skin" text="Dull Skin"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-1"} backLink="user-details"/>
    </>
  )
}

export default SkinOne