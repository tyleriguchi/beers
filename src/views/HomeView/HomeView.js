import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classes from './HomeView.scss'
import BeerList from '../../components/BeerList'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

export class HomeView extends Component {

  render () {
    const { dispatch, beers, children } = this.props;

    const hasChildren= !!children;
    if (hasChildren) {
      return (<div>{children}</div>)
    }
    else {
      return (<BeerList beers={beers}/>)
    }
  }
}

export default connect(state => state)(HomeView)
