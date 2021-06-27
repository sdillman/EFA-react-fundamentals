import { getByDisplayValue } from '@testing-library/react';
import { useState } from 'react';

const PropsDemo = () => {
// Passes a prop of 'string' to a child functional component
// HAS the string to display, but calls (and depends on) the child component "FunctionalComponent" to do the work

const [ color, setColor ] = useState('white');
const [ backgroundColor, setBackgroundColor ] = useState('purple');
const [ borderRadius, setBorderRadius ] = useState('5px');
const [ borderStyle, setBorderStyle ] = useState('dashed');
const [ display, setDisplay ] = useState('inline-block');
const [ width, setWidth ] = useState('350px');
const [ textAlign, setTextAlign ] = useState('center');

let styles = {
    color : color,
    backgroundColor : backgroundColor,
    borderRadius : borderRadius,
    borderStyle : borderStyle,
    display : display,
    width : width,
    textAlign : textAlign
    };

const toggleColor = () => {
    color === 'white' ? setColor('pink') : setColor('white');
}
const toggleBkgndColor = () => {
    backgroundColor === 'purple' ? setBackgroundColor('#333333') : setBackgroundColor('purple');
}
const toggleBorderRadius = () => {
    borderRadius === '5px' ? setBorderRadius('50px') : setBorderRadius('5px');
}
const toggleBorderStyle = () => {
    borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
}


    return (
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                    <FunctionalComponent string="Wanna toggle the text color?" function={toggleColor} />
                    <FunctionalComponent string="How 'bout the background?" function={toggleBkgndColor} />
                    <FunctionalComponent string='Border radius?' function={toggleBorderRadius} />
                    <FunctionalComponent string='your job to get this out there!' function={toggleBorderStyle} />

                </div>
                
            </div>
        </div>
    );

};

export default PropsDemo;


const FunctionalComponent = (props) => {
    // This is the child functional component
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
        </div>
    )
}