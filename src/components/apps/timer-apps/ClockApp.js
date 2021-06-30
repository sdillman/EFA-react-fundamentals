import React, { useState, useEffect } from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const ClockApp = () => {

    const [time, setTime] = useState(getTimeString());

    useEffect( () => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        })
    }, 1000);

    return (
        <div>
            <h1 className = "section-title">React Clock</h1>
            <div>{ time }</div>
        </div>
    );
}

export default ClockApp;