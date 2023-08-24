import { useDispatch, useSelector } from "react-redux"
import "./Counter.css"
import { decrease, increase, increaseByAmount, reset } from "../../features/counterSlice"
import { useState } from "react"

const Counter = () => {
  const [num, setNum] = useState(0)

  const { count } = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  const handleIncrease = () => dispatch(increase())
  const handleDecrease = () => dispatch(decrease())
  const handleReset = () => {
    dispatch(reset())
    setNum(0)
  }
  const handleAmount = () => dispatch(increaseByAmount(+num))

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <div>
        <button onClick={handleIncrease} className="counter-button positive">increase</button>
        <button onClick={handleReset} className="counter-button zero">reset</button>
        <button onClick={handleDecrease} className="counter-button negative">decrease</button>
        <button onClick={handleAmount} className="counter-button negative">Increase by Amount</button>
      </div>
    </div>
  )
}

export default Counter
