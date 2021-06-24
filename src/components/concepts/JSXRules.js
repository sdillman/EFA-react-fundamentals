
import React from 'react';
const JSXRules = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1 className='section-title'>JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to JavaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not required</dt>
                    <dd>You can write in vanilla JS, but most people use JSX</dd>
                </dl>
                <hr />
            </div>
            <NormalComponent>

            </NormalComponent>
            <CreateElementComponent>

            </CreateElementComponent>
        </div>
    );
};

const NormalComponent = () => {
    return(
        <div style={{ border: '2px solid black' }}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src='https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg' />
        </div>
    );
};

const CreateElementComponent = () => {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          border: "2px solid black"
        }
      },
      /*#__PURE__*/ React.createElement(
        "h1",
        null,
        "React.createElement() Functional Component"
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        null,
        "This was constructed with explicit successive React.createElement() calls."
      ),
      /*#__PURE__*/ React.createElement("img", {
        src: "https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg"
      })
    );
  };

export default JSXRules;