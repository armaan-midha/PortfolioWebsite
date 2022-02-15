import React, {useState, useEffect, useLayoutEffect} from "react";
import "./styles/Clock.css";

function Clock() {
 
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setIntervalId(setInterval(()=>updateTime(),1000));
    }, []);
    

    useLayoutEffect(() => {
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const updateTime = () => {
            setTime(new Date().toLocaleTimeString())
    }        

       return(
            <div className="time">
                <p>{time}</p>
            </div>
        )
}

export default Clock;
