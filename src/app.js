import React from "react";
import Title from "./Title";
import Square from "./Square";
import Button from "./Button";
import LikeButton from "./LikeButton";
import SeachButton from "./SeachButton";

class App extends React.Component {
  state = {
    text: "teste de state",
    color: "red"
  };

  render() {
    return (
      <div>
        <h1>
          <Title name="Suele " lastname="Guimarães" />
        </h1>
        <div>
          <Square color={this.state.color} />
          {["green", "blue", "pink", "purple"].map(color => (
            <Button key={color} handleClick={() => this.setState({ color })}>
              {color}
            </Button>
          ))}
        </div>
        <div>
          <Button>Entrar</Button>
          <Button>Cancelar</Button>
          <Button>Teste</Button>
          <LikeButton />
          <SeachButton />
        </div>
        <div onClick={() => this.setState({ text: "outro texto" })}>
          <h1>{this.state.text}</h1>
        </div>
      </div>
    );
  }
}

export default App;
