import React, { Component } from 'react';
import request from 'superagent';

// const data = [
//   {
//     character: 'some character 1',
//     type: 'some type 1'
//   },
//   {
//     character: 'some character 2',
//     type: 'some type 2'
//   },
//   {
//     character: 'some character 3',
//     type: 'some type 3'
//   }
// ]



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
    console.log(fetchedData)
    this.setState({ data: fetchedData.body.results })
  }

  

  render() {
    return (
      <div>
       <input onChange={this.handleChange}/>
       <button onClick={this.handleClick}>Search</button>
       <div>
             {
                 this.state.data.map(data => {
                 return <>
                 <h2>{data.pokemon}</h2>
                 <img src={data.url_image}/>
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
