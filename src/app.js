
import React from "react";
import Title from "./Title";
import Square from "./Square";

class App extends React.Component {
  render() {
    return (
      <h1>
        <Title name='Suele ' lastname='Guimarães'/>
        <Square color='blue'/>
      </h1>
    );
  }
}

export default App;
