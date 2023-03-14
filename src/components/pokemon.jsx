import React, {useEffect, useState} from 'react';
import axios from 'axios';

const  Pokemon = props =>{
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response=>{
            setPokemons(response.data.results)})
    };


    // const getPokemon = (e) =>{
    //     e.preventDefault();
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(response => {
    //         console.log(response);

    //         setPokemons(response.results)

    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     });
    // }


    return(
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {pokemons.length > 0 && pokemons.map((pokemon, idx)=>{
                return (<div key={idx}> {pokemon.name}</div>)
            })}
        </div>
    );



}


export default Pokemon;

// document.querySelector('#type').innerText = pokemon.name


