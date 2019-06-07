import React from 'react';


class Title extends React.Component{
  render() {
    return (
      <div>
        Olá {this.props.name + this.props.sobreNome}
      </div>
    );
  }
}

Title.defaultProps = {
  name: 'nome não informado, ',
  sobreNome: 'sobreNome não informado'
}

export default Title;