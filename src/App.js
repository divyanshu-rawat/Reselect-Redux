import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Reselect App</h1>
      </div>
    );
  }
}

export default App;


// In Redux, whenever an action is called anywhere in the application, all mounted & connected components call their mapStateToProps function.
// This is why Reselect is awesome.
// It will just return the memoized result if nothing has changed.

// Reselect is a popular library that provides a convenient way of getting values from a store in a React-Redux application.
// What makes it so good is its memoization ability.

// when you use the createSelector() function,
// it memiozes an output of every input selector and recalculates the resulting value only if any of the input selectors changes its output.

// After mapStateToProps() yields recalculated props, the new props are shallow compared to the old ones and if they differ, component gets rerendered. 