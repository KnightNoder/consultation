import '../css/ProceedTemplate.css'
import GenericButton from '../Components/GenericButton'
import {useNavigate} from "react-router-dom"

const ProceedTemplate = ({text,choice,backLink}) => {
  const navigate = useNavigate();
  return (
    <div className="proceed-container">
        <div className='back-button' onClick={() => navigate('/'+backLink)}>
            Back
        </div>
        <div className='proceed-button'>
            <GenericButton text={text} choice={choice}/>
        </div>

    </div>
  )
}

export default ProceedTemplate