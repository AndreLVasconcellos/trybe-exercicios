import React from 'react';

class App extends React.Component {
constructor() {
  super();
  this.handleButtonOne = this.handleButtonOne.bind(this);
  this.handleButtonTwo = this.handleButtonTwo.bind(this);
  this.handleButtonThree = this.handleButtonThree.bind(this);
  this.getButtonColor = this.getButtonColor.bind(this); 

  this.state = {
    clickBtnOne: 0,
    clickBtnTwo: 0,
    clickBtnThree: 0,
  };
}

getButtonColor(num) {
  return num % 2 === 0 ? 'green' : 'white';
}  

handleButtonOne() {
  const { clickBtnOne } = this.state;
  console.log('Clicou no Botao 1!', this);
  this.setState((prevState) => ({
    clickBtnOne: prevState.clickBtnOne + 1,
  }), () => {
    console.log(`Botao 1 ${this.getButtonColor(clickBtnOne)}`);
  });
}

handleButtonTwo() {
  const { clickBtnTwo } = this.state;
  console.log('Clicou no Botao 2!', this);
  this.setState((prevState) => ({
    clickBtnTwo: prevState.clickBtnTwo + 1,
  }), () => {
    console.log(`Botao 1 ${this.getButtonColor(clickBtnTwo)}`); 
  });
}

handleButtonThree() {
  const { clickBtnThree } = this.state;
  console.log('Clicou no Botao 3!', this);
  this.setState((prevState) => ({
    clickBtnThree: prevState.clickBtnThree + 1,
  }), () => {
    console.log(`Botao 1 ${this.getButtonColor(clickBtnThree)}`); 
  });
}

  render() {
    const { clickBtnOne, clickBtnTwo, clickBtnThree } = this.state;
    return (
      <div>
      <button style={ { backgroundColor: this.getButtonColor(clickBtnOne) } } type='button' onClick={ this.handleButtonOne }>{`Cliques Botao 1: ${clickBtnOne}`}</button>
      <button style={ { backgroundColor: this.getButtonColor(clickBtnTwo) } } type='button' onClick={ this.handleButtonTwo }>{`Cliques Botao 2: ${clickBtnTwo}`}</button>
      <button style={ { backgroundColor: this.getButtonColor(clickBtnThree) } } type='button' onClick={ this.handleButtonThree }>{`Cliques Botao 3: ${clickBtnThree}`}</button>
      </div>
    );
  }
}

export default App;