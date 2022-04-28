import { useState } from "react"

const Final = ({payload,choice}) => {
  const [a,seta] = useState('1')
  console.log(a,'val')
  return (
    <div>
        {[choice]} Hello
        <br/>
        {a}
        <button onClick={() => seta('1')}>Yes</button>
        <button onClick={() => seta('0')}>No</button>
    </div>
  )
}

export default Final