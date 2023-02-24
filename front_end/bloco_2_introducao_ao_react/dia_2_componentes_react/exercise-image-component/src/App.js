import './App.css';
import Image from './Image';
import staringCat from './staringCat.jpg';

function App() {
  const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
  return (
    <main> 
    <h2 className='title'>Gatinho!!!!!</h2>
    <div className='content'>
      <Image source={ staringCat } alternativeText="Cute cat staring" />
      <Image source={ URL } alternativeText="Cute cat staring" />
      </div>
    </main>
  );
}

export default App;
