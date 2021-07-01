import React, { useState, useEffect } from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    console.log(date, typeof(date));
    return date;
}

const ClockApp = () => {

    const [time, setTime] = useState(getTimeString());

    useEffect( () => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
            }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className = "section-title">React Clock - Local</h1>
            <hr className="explanation" />
            <p>{ time }</p>
            <hr className="explanation" />
            <h1 className = "section-title">React Clock - Friends West</h1>
            <hr className="explanation" />
            <p>{ time }</p>
        </div>
    );
}

export default ClockApp;