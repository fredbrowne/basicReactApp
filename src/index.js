// Import the React and React-DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create react component
const App = () => {
  
  const buttonText = { text: 'Click me!' };
  const labelName = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
      { labelName }
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        { buttonText.text }
      </button>
    </div>
  );
};

// Take the react component  and show in it in the screen
ReactDOM.render(<App />, document.querySelector('#root'));