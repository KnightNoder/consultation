import {useNavigate} from "react-router-dom"

const Parent = ({onchange,choice}) => {
const navigate = useNavigate()
  return (
    <div>
        Hello {choice}
        <br/>
        <input type="radio" id="html" name="choice1"
         checked={"choice1" == choice} value="choice1" onChange={onchange} />
        <label for="html">Choice1</label>
        <br />
        <input type="radio" id="css" name="choice2"
         checked={"choice2" == choice} value="choice2" onChange={onchange} />
        <label for="css">Choice2</label>
        <br/>
        <button onClick={() => navigate('/second')}>Next</button>
    </div>
  )
}

export default Parent