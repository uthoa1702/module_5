import {useState} from "react";


export function Counter(){
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)



    const handleAdd1 = () => {
        setCount1(prevState => prevState + 1)
    }

    const handleAdd2 = () => {
        setCount2(prevState => prevState + 2)
    }

    return(
        <>
            <p>Count 1: {count1}</p>
            <button onClick={handleAdd1}>Add 1</button>
            <br/>
            <p>Count 2: {count2}</p>
            <button onClick={handleAdd2}>Add 2</button>
        </>


    )
}