import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/CounterSlice";

function Counter () {
    const count = useSelector((stste) => stste.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter Value:{count}</h2>

            <button className="gp" onClick={() => dispatch(increment())}>+</button>
            <button className="gp" onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}
export default Counter;
