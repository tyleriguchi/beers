import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

let Beer = class Beer extends Component {
  constructor(props) {
    super(props);

    const beer = props.beers.find( ( beer ) => {
      return beer.id == props.params.beerId
    });

    this.state = {
      beer
    }
  }

  render() {
    const beer = this.state.beer;

    return (
      <li>
        <span>{beer.name}</span>
        <span>{beer.brewery}</span>
        <span>{beer.description}</span>
        <Link to={'/'}>Back To List</Link>
      </li>
    )
  }
}

export default connect(state => state)(Beer)
