import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'redux-simple-router';
import BeerForm from '../../containers/BeerForm';
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

  updateBeer(beer) {
    const { beerActions, routeActions } = this.props;

    //TODO refactor
    beer.id = this.state.beer.id;

    beerActions.updateBeer(beer);
    routeActions.push('/');
  }

  render() {
    const beer = this.state.beer;

    return (
      <BeerForm
        editBeer={beer}
        handleBeerForm={ this.updateBeer.bind(this) }
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
