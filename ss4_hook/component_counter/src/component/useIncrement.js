import {useState} from "react";


export function useIncrement(fromNumber) {
    const [count, setCount] = useState(fromNumber)

    function increase(addAmount) {
        setCount(prevState => prevState + addAmount)
    }
    return [count,increase]

}