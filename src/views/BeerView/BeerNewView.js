import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'redux-simple-router';
import * as BeerActions from '../../redux/actions/Beers';
import BeerNewForm from '../../components/BeerNewForm';

class BeerCreate extends Component {
  constructor(props) {
    super(props);
  }

  createBeer(beer) {
    const { beerActions, routeActions } = this.props;

    beerActions.addBeer(beer);
    routeActions.push('/');
  }

  render() {
    return (
      <div>
        <BeerNewForm
          createBeer={ this.createBeer.bind(this) }
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    beerActions: bindActionCreators(BeerActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(
  state => state,
  mapDispatchToProps
)(BeerCreate)
