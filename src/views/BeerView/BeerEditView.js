import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'redux-simple-router';
import BeerNewForm from '../../components/BeerNewForm';
import * as BeerActions from '../../redux/actions/Beers';

class BeerEdit extends Component {
  constructor(props) {
    super(props);

    const beer = props.beers.find( (beer) => {
      return beer.id == props.params.beerId
    });

    this.state = {
      beer
    }
  }

  createBeer(beer) {
    const { beerActions, routeActions } = this.props;

    beerActions.addBeer(beer);
    routeActions.push('/');
  }

  render() {
    const beer = this.state.beer;

    return (
      <BeerNewForm
        editBeer={beer}
        createBeer={ this.createBeer.bind(this) }
      />
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
)(BeerEdit)
