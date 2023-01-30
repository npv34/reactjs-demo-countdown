import {useEffect, useState} from "react";

function CountDown() {
    const [number, setNumber] = useState(0);
    const [start, setStart] = useState(false)
    useEffect(() => {
        if (start) {
            const timer = number > 0 && setInterval(() => {
                setNumber(number - 1)
            }, 1000)
            return () => clearInterval(timer)
        }
    });
    return (
        <>
            Timer:<input type="number" onChange={(e) => setNumber(+e.target.value)}/>
            <button onClick={()=>setStart(true)}>Start</button>
            <div>Countdown: {number}</div>
        </>
    )
}

export default CountDown;
