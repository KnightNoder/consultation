import '../css/GenericButton.css'
import {useNavigate} from "react-router-dom"
const GenericButton = ({text,choice,conditionMet,vibrateText,newButton,directNavigate,navigateTo,radiusBottom}) => {
  const navigate = useNavigate();
  const navigateCheck = () => {
    if(directNavigate) {
      navigate(parseInt(navigateTo))
    } else {
      if(conditionMet){
        navigate('/'+choice)
      } else {
        vibrateText()
      }
    }
  }

  return (
    <button className={`generic-button ${newButton ? "backButtonStyle": ''} ${radiusBottom ? "borderRadiusBottom": ''}`}
     onClick={() => navigateCheck() }>
            {text}
    </button>

  )
}

export default GenericButton