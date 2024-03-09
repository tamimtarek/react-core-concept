import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(8);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        if(count > 0){
            const newCount = count -1;
            setCount(newCount);
        }
        else{
            alert('Loss')
        }
    }

    return (
        <div style={{border: '2px solid yellow', borderRadius: '10px', margin: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}