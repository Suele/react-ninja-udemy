
import React from "react";
import Title from "./Title";
import Square from "./Square";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Title name='Suele ' lastname='Guimarães' />
        </h1>
        {['red', 'blue', 'green'].map(squareColor => (
          <Square key={squareColor} color={squareColor} />
        ))}
      </div>
    );
  }
}

export default App;
