// Chockablock full of notes for Red 1.00 React state

// A react class component starts with an import, so let's import it:
import React, { Component } from 'react';

// Next, we'll set up a class component and export it so that it is accessible elsewhere
export default class ClassComponentDemo extends Component {
// Next, we'll add a constructor. Since we are inheriting from React, we call 'super' so that we can use the 'this' keyword in the constructor
    constructor(props) {
        super(props);
        // 'this.state' to create the initial state of this component
        // example - this.state = { simpleMessage: "Welcome user!!!" };
        this.state = { count: 0 };
    }

    incrementCount = () => {
        console.log("increment called");
        this.setState(
            { count: this.state.count + 1 }
        );
    };
    // in all class components in React, a render method is required. This is the JSX that gets packaged up, exported, and rendered when our component gets called.
    // It's important to note and remind you here that we can create another component (Class or Functional) and call it, as we do below with <ClassComponentNotes />
    render() {
        console.log("render called");
        return (
            <div className = "main">
                <div className = "mainDiv">
                <ClassComponentNotes />
                <hr />
                    <h3>Smash that like button!</h3>
                    <button onClick = { this.incrementCount }>
                        Likes: { this.state.count }
                    </button>
                </div>
            </div>
        );
    }
}
// state implies something that shows a possibility of transmutation and that has a possibility to change based on some other factor. You don't use state with an application that is just showing static content.

const ClassComponentNotes = function () {
      return (
        <div>
          <h1>Class Components</h1>
    
          <p>Class components are considered the "React way" of writing components.</p>
          <dl>
            <dt>ES6 JS Classes</dt>
            <dd>Built on these, must understand them</dd>
            <dt>must extend Component </dt>
            <dd>Class components need to extend the React Component.</dd>
            <dt>render()</dt>
            <dd>Class components must always have a render method.</dd>
            <dt>export</dt>
            <dd>Only one class component exported per file.</dd>
          </dl>
        </div>
      );
    };