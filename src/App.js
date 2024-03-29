import React from 'react';
import dexInfo from './Pokedex.js';
import Pokecard from './Pokecard.js';
import './pokemon.css';

function App() {
    
    const pokemon = dexInfo;
    return(<div>
        <h2 className='pokedex-name'> Pokedex </h2>
        <ul className='Pokedex-cards'>
            {pokemon.map(p => ( 
                <li>
                    <Pokecard pokemon={p}/>
                </li>
            ))}           
        </ul>      
    </div>
)

}

export default App;