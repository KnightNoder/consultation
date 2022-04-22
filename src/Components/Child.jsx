import {useNavigate} from "react-router-dom"

const Parent = ({firstName,lastName,onchange,choice}) => {
  const navigate = useNavigate()
  return (
    <div>
        Hello {choice}
        <br />
        <input type="text" value={firstName} name="firstNameTwo" onChange={onchange}/>
        <input type="text" value={lastName} name="lastNameTwo" onChange={onchange}/>
        <button onClick={() => navigate('/final')}>Next</button>
    </div>
  )
}

export default Parent