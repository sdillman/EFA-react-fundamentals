import {useState, useEffect} from 'react';

const Effects = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h2>Below are some important points regarding effects</h2>
                <ul>
                    <li>They are triggered with state and props updates, as well as after initial render to the DOM</li>
                    <li>Effects are used to trigger certain actions based upon changes to a component</li>
                    <li>Effects can return cleanup functions, which can clean up timers using memory, listeners to outside API's, and other functions which may use system resources</li>
                </ul>
                <SampleEffect />
                <br />
                <SampleEffect />
            </div>
        </div>
    );
};

// export default Effects;
export default Effects;


const SampleEffect = () => {

    const [timerRunning, setTimerRunning] = useState(false);

    return(
        <div style={{ border: '1px dashed black' }}>
            <h2>This component demos an effect</h2>
            <button>Click me to start an effect in the console</button>
        </div>
    );
};