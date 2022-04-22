import '../css/ProceedTemplate.css'
import GenericButton from '../Components/GenericButton'
import {useNavigate} from "react-router-dom"

    // !/[0-9]/.test(e.key) ? SetAge(e.target.value) : e.preventDefault();
const ProceedTemplate = ({text,choice,backLink,conditionMet,vibrate,vibrateText}) => {
  const navigate = useNavigate();
  return (
    <div className="proceed-container">
        <div className='back-button' onClick={() => navigate('/'+backLink)}>
            Back
        </div>
        <div className='proceed-button'>
            <GenericButton text={text} choice={choice} 
            conditionMet={conditionMet} vibrate={vibrate} vibrateText={vibrateText} />
        </div>

    </div>
  )
}

export default ProceedTemplate