import React, { useContext, useState } from 'react';
import '../styles/Login.css';
import logo from '../assets/trybe-negativo-preferencial.png';
import AuthContext from '../context/AuthContext';

function FormLogin() {
  const { handleLogin, isLoading, errors } = useContext(AuthContext);
  const [login, setLogin] = useState({ username: '', password: '' });

  const isFilled = !!(login.username && login.password);

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // envia o formulário de login
    // console.log('enviou o formulário');
    await handleLogin(login.username);
  };

  return (
    <div className="Login">
      <div className="Login__Container">
        <img src={ logo } alt="logo trybe" width="120" />
        <form>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={ login.username }
              onChange={ handleChange }
            />
            <small style={ { color: 'red' } }>
              {errors !== null && `${login.username} ${errors}`}
            </small>
          </label>
          <label htmlFor="password" id="password">
            <input
              type="password"
              placeholder="password"
              value={ login.password }
              onChange={ handleChange }
              name="password"
            />
          </label>

          <button
            type="button"
            disabled={ !isFilled }
            onClick={ handleSubmit }
          >
            {isLoading ? 'carregando ...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
