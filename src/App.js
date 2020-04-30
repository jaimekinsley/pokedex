import React, { Component } from 'react';
import request from 'superagent';


export default class App extends Component {
state = {
  searchQuery: null,
  data: [],
}

  handleChange = (event) => {
    // gets the value of input
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }

  handleClick = async () => {
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
    this.setState({ data: fetchedData.body.results });
  }

  handleAttackClick = async () => {
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
    const attackData = fetchedData.body.results.filter((e) => {
      if (e.attack >= this.state.searchQuery){
      return true;
      }
      return false;
    });
    this.setState({ data: attackData });
  }

  

  render() {
    return (
      <div> 

        <div className='searchName'>
        Search by name or type:
       <input onChange={this.handleChange}/>
       <button onClick={this.handleClick}>Search</button>
       </div>

      <div className='searchAttack'>
        Search by attack minimum:
      <input onChange={this.handleChange}/>
       <button onClick={this.handleAttackClick}>Search</button>
      </div>



             <div>
             {
                 this.state.data.map(data => {
                 return <>
                 <h2>{data.pokemon}</h2>
                 <img src={data.url_image} alt={data.pokemon}/>
                 <h3>Type: {data.type_1}, {data.type_2}</h3>
                 <h3>Attack: {data.attack}</h3>
                 <h3>Defense: {data.defense}</h3>
                 </>
                 })
             } 
            </div>

           
       </div>
    )
  }
}
