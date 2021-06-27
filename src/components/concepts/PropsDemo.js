import { getByDisplayValue } from '@testing-library/react';
import { useState } from 'react';
import PropTypes from 'prop-types';

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
                    <FunctionalComponent string="Wanna toggle the text color?" function={toggleColor} selectedStyle={color} />
                    <FunctionalComponent string="How 'bout the background?" function={toggleBkgndColor} selectedStyle={backgroundColor} />
                    <FunctionalComponent string='Border radius?' function={toggleBorderRadius} selectedStyle={borderRadius} />
                    <FunctionalComponent string='your job to get this out there!' function={toggleBorderStyle} selectedStyle={borderStyle} />
                    { <FunctionalComponent  /> /* This one serves up the default props of FunctionalComponent.defaultProps below */}

                </div>
                
            </div>
        </div>
    );

};
export default PropsDemo;


/* ==================================================================== */

const FunctionalComponent = (props) => {
    // This is the child functional component
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    )
}

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what selected style??'
}

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}

/* ==================================================================== */


const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is : { props.selectedStyle } </p>
        </div>
    )
}