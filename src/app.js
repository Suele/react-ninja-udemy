import React from "react";
import Title from "./Title";
import Square from "./Square";
import Button from "./Button";
import LikeButton from "./LikeButton";
import SeachButton from "./SeachButton";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Title name="Suele " lastname="Guimarães" />
        </h1>
        {["red", "blue", "green"].map(squareColor => (
          <Square key={squareColor} color={squareColor} />
        ))}
        <div>
          <Button>Entrar</Button>
          <Button>Cancelar</Button>
          <Button>Teste</Button>
          <LikeButton />
          <SeachButton />
        </div>
      </div>
    );
  }
}

export default App;
