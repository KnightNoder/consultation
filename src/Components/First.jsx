import {useNavigate} from "react-router-dom"

const First = ({choice,onchg}) => {
  const navigate = useNavigate()
  return (
    <div>
        Hello {choice}
        <br />
        <input type="radio" id="html" name="User1"
         checked={"User1" == choice} value="User1" onChange={onchg} />
        <label for="html">User1</label>
        <br />
        <input type="radio" id="css" name="User2"
         checked={"User2" == choice} value="User2" onChange={onchg} />
        <label for="css">User2</label><br></br>
        <button onClick={() => navigate('/first')}>Next</button>
    </div>
  )
}

export default First