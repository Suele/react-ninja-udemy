"use strict";

import React from "react";
import Title from "./Title";
import Square from "./Square";

class App extends React.Component {
  render() {
    return (
      <h1>
        <Title name='Suele ' lastname='Guimarães' />
        {['red', 'blue', 'green'].map(squareColor => (
          <Square color={squareColor} />
        ))}
      </h1>
    );
  }
}

export default App;
