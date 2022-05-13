import hairOne from '../../images/hair-one.png'
import hairTwo from '../../images/hair-two.png'
import hairThree from '../../images/hair-three.png'
import hairFour from '../../images/hair-four.png'
import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/ChoicePage.css'
import { useState,useEffect } from 'react';


const HairOne = () => {
    const [selected,SetSelected] = useState(window.localStorage.getItem('hair_current_condition') || 'Condition one')

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    
    useEffect(() => {
        window.localStorage.setItem('hair_current_condition', selected );
    }, [selected]);

    const handleClick = (choice) => {
      SetSelected(choice)
    }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/assessment.png?v=1651128252" className='image' alt="" />
            </div>  
            <div className='assessment'>
              <h5>What is the current condition of your hair and scalp?</h5>
              <ChoiceCard clickHandler={handleClick} choice={selected} image={hairOne} text="Condition one"/>
              <ChoiceCard clickHandler={handleClick} choice={selected} image={hairTwo} text="Condition two"/>
              <ChoiceCard clickHandler={handleClick} choice={selected} image={hairThree} text="Condition three"/>
              <ChoiceCard clickHandler={handleClick} choice={selected} image={hairFour} text="Condition four"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={'hairfall-1'} backLink="user-details" conditionMet="true"/> 
    </>
  )
}

export default HairOne