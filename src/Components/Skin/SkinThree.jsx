import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinThree = ({saturn_choice,Set_minor_data}) => {

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
              <h5>Please select your skin type </h5>
              <ChoiceCard 
                clickHandler={()=> Set_minor_data("skin","skin_type","Normal")} 
                noImage="true" choice={saturn_choice.skin.skin_type} value="Normal" text="Normal"/>
              <ChoiceCard 
                clickHandler={()=> Set_minor_data("skin","skin_type","Sensitive")} 
                noImage="true" choice={saturn_choice.skin.skin_type} value="Sensitive" text="Sensitive"/>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-3"} backLink="skin-1"/>
    </>
  )
}

export default SkinThree