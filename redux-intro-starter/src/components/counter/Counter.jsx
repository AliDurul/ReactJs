import { useDispatch, useSelector } from "react-redux"
import "./Counter.css"
import {  clear, decrement, increment } from "../../store/counterReducer"

const Counter = () => {

  const {count} = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button positive"
          onClick={() => dispatch(increment())}>increase</button>
        <button onClick={() => dispatch(clear())} className="counter-button zero">reset</button>
        <button  onClick={() => dispatch(decrement())} className="counter-button negative">decrease</button>
      </div>
    </div>
  )
}

export default Counter
