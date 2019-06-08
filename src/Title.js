import React from 'react';

const Title = (props) => (
  <div>
    Olá,
    {`${props.name} ${props.lastname}`}
  </div>
);

Title.defaultProps = {
  name: 'nome não informado, ',
  lastname: 'sobreNome não informado'
}

export default Title;