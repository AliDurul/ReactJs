import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset, incrementByAmount } from "./counterSlice"
import { useState } from "react"

const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)

    const handleReset = () => {
        setAmount(0)
        dispatch(reset())
    }


    return (
        <section >
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <div>
                <button onClick={handleReset}>reset</button>
                <button onClick={() => dispatch(incrementByAmount(+amount))}>Add Amount</button>
            </div>
        </section>
    )
}

export default Counter