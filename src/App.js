import React, { Component } from 'react'

export default class App extends Component {
  handleChange = (event) => {
    // gets the value of input
    const value = event.target.value;
    this.setState({ searchQuery: value });
    console.log(value)
  }


  render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        <button>Search</button>
      </div>
    )
  }
}
