import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { routeActions } from 'redux-simple-router';

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
    const { actions, children } = this.props;

    let html;

    if (children) {
      html = (
        <div>{children}</div>
      )
    }
    else {
      html = (
        <div>
          <h1>{beer.name}</h1>
          <ul className='list'>
            <li>{beer.brewery}</li>
            <li>{beer.type}</li>
            <li>{beer.abv}</li>
            <li>{beer.description}</li>
            <Link to={`/beer/${beer.id}/edit`}>Edit</Link>
          </ul>
        </div>
      )
    }
    return html;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(
  state => state,
  mapDispatchToProps
)(Beer)
