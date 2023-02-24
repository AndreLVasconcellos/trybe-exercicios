import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';
import Favorites from './pages/Favorites';
import AppContext from './context/AppContext';

function App() {
  const { dark, setDark } = useContext(AppContext);

  return (
    <div className={ dark ? 'App__Dark' : 'App__Light' }>
      <Header state={ { dark, setDark } } />
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (<Login
            { ...props }
          />) }
        />
        <Route
          path="/home"
          render={ (props) => (<Home
            { ...props }
          />) }
        />
        <Route
          path="/favorites"
          render={ (props) => (<Favorites
            { ...props }
          />) }
        />
        <Route path="*" component={ PageNotFound } exact />
      </Switch>
    </div>
  );
}

export default App;
