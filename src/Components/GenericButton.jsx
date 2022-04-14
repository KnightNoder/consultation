import '../css/GenericButton.css'
import {useNavigate} from "react-router-dom"
const GenericButton = ({text,choice}) => {
  const navigate = useNavigate()
  return (
    <button className="generic-button" onClick={() => navigate('/'+choice)}>
            {text}
    </button>

  )
}

export default GenericButton