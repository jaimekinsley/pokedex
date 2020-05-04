import React, { Component } from 'react'

export default class SearchBar extends Component {
    render(){
    return (
    <section className='search-name'>
      Search by name or type:
      <input onChange={this.props.CALLBACKhandleChange} />
      <button onClick={this.props.CALLBACKhandleClick}>Search</button>
    </section>)
  }
}