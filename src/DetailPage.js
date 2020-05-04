import React, { Component } from 'react'
import request from 'superagent'
import Header from './Header.js'
import PokeCard from './PokeCard.js'

export default class DetailPage extends Component {

    state = {
        pokemon: {},
    }

    async componentDidMount(){
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.id}`)
        this.setState({ pokemon: fetchedData.body })
        
    }

    render() {
        return (
            <div>
                <Header/>
                <h3>More Details</h3>
               <PokeCard pokemon={this.state.pokemon}/> 
            </div>
        )
    }
}