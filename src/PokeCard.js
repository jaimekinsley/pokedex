import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeCard extends Component {
    render() {
//  console.log(this.props);

        return (
           
            <div className='poke-card'>
            <Link to={`/pokemon/${this.props.pokemon._id}`}><h2 className='pokemon-name'>{this.props.pokemon.pokemon}</h2> </Link>
            
            <img className='pokemon-image' src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon}/>
           
            <h3>Type: {this.props.pokemon.type_1}, {this.props.pokemon.type_2}</h3>
            <h3>Attack: {this.props.pokemon.attack}</h3>
            <h3>Defense: {this.props.pokemon.defense}</h3>
        </div>
            )
        }
    }
    
           
        
