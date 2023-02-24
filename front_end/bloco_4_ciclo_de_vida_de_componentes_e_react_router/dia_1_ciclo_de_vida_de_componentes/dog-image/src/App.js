import React from 'react';

class App extends React.Component {
  state = {
    imageUrl: '',
    isLoading: true,
  };

  componentDidMount() {
    const localStorageUrl = localStorage.getItem('imageUrl')
    localStorageUrl ? this.setState({ imageUrl: localStorageUrl, isLoading: false }) : this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Essa expressão retorna `true` se a string não contiver `terrier`, e `false`, se contiver.
    return !nextState.imageUrl.includes('terrier');
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);
    const dogBreed = imageUrl.split('/')[4];
    alert(dogBreed);
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => this.setState({ imageUrl: data.message, isLoading: false }));
  };

  render() {
    const { imageUrl, isLoading } = this.state;

    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        <h1>Doguinhos</h1>
        <button type="button" onClick={ this.fetchDog }>
          Novo doguinho!
        </button>
        <div>
          <img src={ imageUrl } alt="Douguinhi Aleatorio" />
        </div>
      </div>
    );
  }
}

export default App;
