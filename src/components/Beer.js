import React, { Component, PropTypes} from 'react'
import { Link } from 'react-router'

export default class Beer extends Component {
  render() {
    const { beer } = this.props
    
    return (
      <li>
        <Link to={`/beer/${beer.id}`}>{beer.name}</Link>
      </li>
    )
  }
}

Beer.propTypes = {
  beer: PropTypes.object.isRequired
}
