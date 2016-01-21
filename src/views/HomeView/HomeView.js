import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classes from './HomeView.scss'
import BeerList from '../../components/BeerList'
import * as BeerActions from '../../redux/actions/Beers'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

export class HomeView extends Component {

  render () {
    const { actions, beers, children } = this.props;

    console.log('actions', this.props)
    const hasChildren= !!children;
    if (hasChildren) {
      return (
        <div>
          {children}
        </div>
      )
    }
    else {
      return (
        <div>
          <BeerList beers={beers}/>
          <button onClick={ () =>  actions.addBeer()}>Add Beer</button>
        </div>
      )
    }
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
)(HomeView)
