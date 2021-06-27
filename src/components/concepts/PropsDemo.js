import { getByDisplayValue } from '@testing-library/react';
import { useState } from 'react';

const PropsDemo = () => {
// Passes a prop of 'string' to a child functional component
// HAS the string to display, but calls (and depends on) the child component "FunctionalComponent" to do the work
    return (
        <div className='main'>
            <div className='mainDiv'>
                <FunctionalComponent string='will this display?' />
                <FunctionalComponent string='it should' />
                <FunctionalComponent string='wakey wakey FunctionalComponent' />
                <FunctionalComponent string='your job to get this out there!' />
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
        </div>
    )
}