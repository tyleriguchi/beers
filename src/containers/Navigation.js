import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { bindActionCreators } from 'redux';

class Navigation extends React.Component {
  render() {
    const { actions } = this.props
    return (
      <Tabs>
        <Tab
          label="Home"
          route="/"
          onActive={ (e) => actions.push(e.props.route)}
        />

        <Tab
          label="Add Beer"
          route="/new-beer"
          onActive={ (e) => actions.push(e.props.route)}
        />
      </Tabs>
    );
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
)(Navigation);
