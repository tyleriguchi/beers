import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as BeerActions from '../../redux/actions/Beers';

class BeerCreate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions } = this.props;
    let beer = { name: 'mine'};

    return (
      <button onClick={ () => actions.addBeer(beer)}>CreateBeer</button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BeerActions, dispatch)
  }
}

export default connect(
  state => state,
  mapDispatchToProps
)(BeerCreate)
