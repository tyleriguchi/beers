import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

let Beer = class Beer extends Component {
  constructor(props) {
    super(props);

    const beer = props.beers.find( (beer) => {
      return beer.id == props.params.beerId
    });

    this.state = {
      beer
    }
  }

  render() {
    const beer = this.state.beer;

    return (
      <div>
        <h1>{beer.name}</h1>
        <ul className='list'>
          <li>{beer.brewery}</li>
          <li>{beer.type}</li>
          <li>{beer.abv}</li>
          <li>{beer.description}</li>
          <li><Link to={'/'}>Back To List</Link></li>
        </ul>
      </div>
    )
  }
}

export default connect(state => state)(Beer)
