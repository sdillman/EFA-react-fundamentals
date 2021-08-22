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
        this.state = { likesCount: 0, dislikesCount: 0, likeability: 0};
    }

    incrementCount = () => {
        console.log("increment called");
        this.setState(
            { likesCount: this.state.likesCount + 1, 
                likeability: this.state.likeability + 1 }
        );
    };
    decrementCount = () => {
        console.log("decrement called");
        this.setState(
            { dislikesCount: this.state.dislikesCount - 1,
                likeability: this.state.likeability - 1 }
        );
    };
    
    // in all class components in React, a render method is required. This is the JSX that gets packaged up, exported, and rendered when our component gets called.
    // It's important to note and remind you here that we can create another component (Class or Functional) and call it, as we do below with <ClassComponentNotes />
    render() {
        console.log("render called");
        let likeabilityColor = {
            color: 'black'
        };

        // declared a function to base the style of the Net likeability number off of its value
        const colorControl = function(likeability) {
            return (
        likeability < 0 ? likeabilityColor = { color: 'red' } : likeabilityColor);
        };
        // then called that function
        colorControl(this.state.likeability);

    
        return (
            <div className = "main">
                <div className = "mainDiv">
                <ClassComponentNotes />
                <hr />
                    <h3>Smash the best button for you!</h3>
                    <button onClick = { this.incrementCount }>
                        Likes: { this.state.likesCount }
                    </button>

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                    <button style= {{color: "red"}} onClick = { this.decrementCount }>
                        DISlikes: { this.state.dislikesCount }
                    </button>

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Net likeability: </span><span style= { likeabilityColor }>{ this.state.likeability }</span>
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