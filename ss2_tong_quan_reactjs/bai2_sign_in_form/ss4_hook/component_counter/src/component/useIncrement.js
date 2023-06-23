import {useState} from "react";


export function useIncrement(addAmount) {
    const [count, setCount] = useState(0)

    function increase(addAmount) {
        setCount(prevState => prevState + addAmount)
    }
    return [count,increase]

}