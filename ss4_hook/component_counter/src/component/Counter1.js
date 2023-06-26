import {useIncrement} from "./useIncrement";
import React from "react";


export function Counter1() {
    const [count, setCount] = useIncrement(0)



    return(
        <>
            <p>count 1: {count}</p>
            <button onClick={() => setCount(1)}>Add 1</button>
        </>
    )

}