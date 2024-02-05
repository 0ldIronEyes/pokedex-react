import React from 'react';
import pokedex from './pokedex.js';
import pokecard from './pokecard.js';
import './pokemon.css';

function App() {
    const pokemon = pokedex;
return(
    <div>
        <h2 className='pokedex-name'> Pokedex </h2>
        <ul className='Pokedex-cards'>
            {pokemon.map(p =>( 
                <li>
                    <pokecard pokemon={p}/>
                </li>
            ))}           
        </ul>      
    </div>

)

}

export default App;