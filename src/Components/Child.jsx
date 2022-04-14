import '../css/Child.css'
import React, { useEffect, useState } from "react";


const Child = (props) => {
  console.log(props,'props');
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);

  const increaseCount = () => {
    return setCount(count + 1);
  }
  const decreaseCount = () => {
    return setCount(count - 1)
  }
  return (
    <div className='second' onClick={props.func}>
         <h1> Count {count} </h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Child