import React, { useReducer } from 'react'
import {useState} from 'react'
import reducer from './reducers/claculatorReducer'
import {ACTIONS} from './reducers/claculatorReducer'

const Test = () => {
  const [result, dispatch] = useReducer(reducer, 0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <input type="text" value={num1} onChange={(e) => setNum1(Number(e.target.value))}/>
      <input type="text" value={num2} onChange={(e) => setNum2(Number(e.target.value))}/>
      <button onClick={() => dispatch({type: ACTIONS.ADD, paylodad: {num1: num1, num2: num2}})}>+</button>
      <button onClick={() => dispatch({type: ACTIONS.SUBTRACT, paylodad: {num1: num1, num2: num2}})}>-</button>
      <button onClick={() => dispatch({type: ACTIONS.DIVIDE, paylodad: {num1: num1, num2: num2}})}>/</button>
      <button onClick={() => dispatch({type: ACTIONS.MULTIPLICATION, paylodad: {num1: num1, num2: num2}})}>*</button>
      <p>{result}</p>
    </div>
  )
}

export default Test