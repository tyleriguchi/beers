import React, { PropTypes } from 'react';
import '../../styles/core.scss';
import Navigation from '../../containers/Navigation';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout ({ children }) {
  console.log('history', children.props.history)
  return  (
    <div>
      <Navigation />
      <main className='main-container'>
        {children}
      </main>
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
