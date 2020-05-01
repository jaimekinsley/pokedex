import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default class PokeCard extends Component {
    render() {

        const pokemon = this.props.pokemon;

        return (
            <div>
                
                {
                 this.state.data.map(data => {
                 return <div className="poke-card">

                 <Link to={`/pokemon/${this.props.pokemon._id}`}><h2>{pokemon.pokemon}</h2></Link>
                 <img src={pokemon.url_image} alt={pokemon.pokemon}/>
                 <h3>Type: {pokemon.type_1}, {pokemon.type_2}</h3>
                 <h3>Attack: {pokemon.attack}</h3>
                 <h3>Defense: {pokemon.defense}</h3>
                 </div>
                 })
             } 
           
            </div>

            </div>
        )
    }
}
