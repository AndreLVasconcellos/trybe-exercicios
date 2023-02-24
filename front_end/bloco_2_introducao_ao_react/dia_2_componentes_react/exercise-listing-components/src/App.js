// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import RenderImage from './components/RenderImage';
import users from './data';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <RenderImage users={ users } />
      </div>
    );
  }
}

export default App;