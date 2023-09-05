
import { useState } from 'react';
import './App.css'
import imgHome from './img/rick-morty.png';
import Characters from './Components/Characters';
function App() {
  
const [characters, setCharacters] = useState (null);

const reqApi = async ()=> {
  

  const api = await fetch('https://rickandmortyapi.com/api/character');
  const characterApi = await api.json();
  console.log(characterApi);
  setCharacters(characterApi.results);
  
};


  return (
    <>
    <h1 className="title">Rick & Morty</h1>
     {characters ? (
     <Characters characters={characters} setCharacters={setCharacters} />
     ) : (
    <div className="container-group">
      <img src={imgHome} alt="Rick y Morty" className='img-home' />

      <button onClick={reqApi} className='btn-search'>Biblioteca de Personajes</button>
    </div>
    )}
  </>
  )
}

export default App
