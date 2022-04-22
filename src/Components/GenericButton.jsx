import '../css/GenericButton.css'
import {useNavigate} from "react-router-dom"
const GenericButton = ({text,choice,conditionMet,vibrateText}) => {
  const navigate = useNavigate();
  const navigateCheck = () => {
    if(conditionMet){
      navigate('/'+choice)
    } else {
      vibrateText()
    }
  }
  return (
    <button className="generic-button" onClick={() => navigateCheck() }>
            {text}
    </button>

  )
}

export default GenericButton