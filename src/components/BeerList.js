import React, { Component, PropTypes } from 'react';
import Beer from './Beer';

export default class BeerList extends Component {
  render() {
    let id = 0;
    return (
      <div>
        <h1>Beer List</h1>
        <ul className='list'>
          {this.props.beers.map( beer =>
            <Beer
              key={beer.id}
              beer={beer}
              />
          )}
        </ul>
      </div>
    )
  }
}

BeerList.propTypes = {
  beers: PropTypes.array.isRequired
}
