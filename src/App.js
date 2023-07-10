import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokeList, setPokemon] = useState([]);
  const [pokeList2, setPokemon2] = useState([])

  const getPokeList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(response => {
      return response.json();
    }).then(response =>{
      // console.log(response)
      setPokemon(response.results);
    }).catch(err=>{
      console.log(err);
    });
  }

  const axiosPokeList = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0').then(response=>{
      console.log(response);
      return response;
    }).then( response => {
      setPokemon2(response.data.results);
    }).catch(err=>{
      console.log(err)
    });
  }

  // console.log(pokeList2)

  return (
    <>
      <div className='lists'>
        <div>
        <button onClick={axiosPokeList}>List 807 Pokemon vis Axios</button>
          <p>Axios Pokemon list:</p>
          <ul>
          {pokeList2.length > 0 && pokeList2.map((pokemon, index) => {
            return (<li key={index+1}>{index+1} - {pokemon.name}</li>)
          })}
          </ul>
        </div>
        <div>
        {pokeList.length==0?<button onClick={getPokeList}>List 807 Pokemon!</button>:<></>}
          <p>Fetch Pokemon list:</p>
          <ul>
          {pokeList.length > 0 && pokeList.map((pokemon, index) => {
            return (<li key={index+1}>{index+1} - {pokemon.name}</li>)
          })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
