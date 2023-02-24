// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
      email: '',
      saveEmail: [],
      teste: true,
    };

  changeEmail = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  changeSaveEmail = () => {
    const { email } = this.state;
    this.setState((prev) => ({
      saveEmail: [...prev.saveEmail, email],
      email: '',
      teste: false,
    }))  
  }

  removeEmail = (indexEmail) => {
    this.setState((prev) => ({
      saveEmail: prev.saveEmail.filter((e, index) => index !== indexEmail),
    }))
  }

  VerifyEmail = (value) => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)

  render() {
    const { email, saveEmail, teste } = this.state;
    // console.log(this.VerifyEmail('email@email.com'));
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            name="email"
            type="email"
            value={email}
            onChange={ this.changeEmail }
          />
        </label>
        {
          email && (
            <div>
            <h3 style={ { color: this.VerifyEmail(email) ? 'lightgreen' : 'tomato' } }>
              {(this.VerifyEmail(email) ? 'Email Válido' : 'Email Inválido')}
              </h3>
            </div> 
          )
        }
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ email && this.changeSaveEmail }
          disabled={ !this.VerifyEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        <ul>
        { teste ? 
        (<h2 
        data-testid="id-email-user"
        >
         {`Email: ${saveEmail}`} 
        </h2>
        ) :
          ( saveEmail.map((e, index) => (
            <li key={index}>
              <h2
            data-testid="id-email-user"
            key={index}
            >
              {`Email: ${e}`}
            </h2>
             <button
             type="button"
             onClick={ () => this.removeEmail(index) }
           >
             Remover
           </button>
          </li> 
          )))
        }
        </ul>
      </div>
    );
  }
}

export default App;

