import { useState } from 'react'
import Child from '../Components/Child'
import '../css/Parent.css'

const Parent = () => {
  const [state,SetState] = useState('lava')
  const onchange = () => {
      SetState('kumar')
  }
  return (
    <div>
        Hello {state}
        <Child name="kumar" func={onchange}/>
    </div>
  )
}

export default Parent