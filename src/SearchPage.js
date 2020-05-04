import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header.js'
import "./App.css"; 
import SearchBar from './SearchBar.js'
import PokeCard from './PokeCard.js'


export default class App extends Component {

  state = {
  searchQuery: '',
  data: [],
  page: 1,
  body: {},
  // search: ''
}

async componentDidMount(){
  const searchParams = new URLSearchParams(window.location.search);
  console.log(searchParams)
  const query = searchParams.get('search');
  console.log(query)

  this.setState( {searchQuery: query} );



  if (query) {
    let page = 1;
    // let response = {};

    if (searchParams.get('page')){
      page = searchParams.get('page');
    
  }
  const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${query}&page=${page}`)
  const results = response.body.results;
  this.setState({ data: results }) 
  } else {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)
    const results = response.body.results;
    this.setState({ data: results }) 
  }
}


    // gets the value of input as it is typed in the input field
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }


  // On click, this searches the pokemon API for what has been entered into the input field
  handleClick = async () => {
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
    this.setState({ data: fetchedData.body.results });
  }

  // On click, this fetches everything in the pokemon API, filters the results for anything in the attack property that is greater or equal to the user's input
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

  // creates the fetch for the page number
  routeToNextPage = async () => {
    const nextPageNumber = this.state.page + 1;  
    this.setState({ page: nextPageNumber }) 
  
   const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&page=${nextPageNumber}`);
   const results = response.body.results;
   this.setState({ data: results })

  }

  // creates the fetch for the previous page numg34
  routeToPreviousPage = async () => {
    const previousPageNumber = this.state.page - 1;  
    this.setState({ page: previousPageNumber }) 
  
   const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&page=${previousPageNumber}`);
   const results = response.body.results;
   this.setState({ data: results })

  }
 

  render() {
    return (
      <div> 
        <Header/>

{/* this creates the search input and button */}
        <SearchBar 
        CALLBACKhandleChange={this.handleChange}
        CALLBACKhandleClick={this.handleClick}
        />

{/* this creates the search attack input and button */}
      <div className='search-attack'>
        Search by attack minimum:
      <input onChange={this.handleChange}/>
       <button onClick={this.handleAttackClick}>Search</button>
      </div>

{/* // This renders a pokemon card */}
      <div>
        {/* This renders the previous and next buttons */}
      <button onClick={this.routeToPreviousPage}>Previous</button>
              
              <button onClick={this.routeToNextPage}>Next</button>
      {
                  this.state.data.map((door) => {
                    return <PokeCard pokemon={door}/>
                  })  
                }
      </div>



       </div>
    )
  }
}



// {/* This renders a pokemon card */}
//              {/* <div className="poke-list">
             
//              {
//                  this.state.data.map(data => {
//                  return <div className="poke-card">
//                 <h2>{data.pokemon}</h2>
//                  <img src={data.url_image} alt={data.pokemon}/>
//                  <h3>Type: {data.type_1}, {data.type_2}</h3>
//                  <h3>Attack: {data.attack}</h3>
//                  <h3>Defense: {data.defense}</h3>
//                  </div>
//                  })
//              } 
           
//             </div> */}