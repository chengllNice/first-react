import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class MenuNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static prosTypes = {
    data: PropTypes.array.isRequired
  };
  render() {
    const name = 'menu-nav';
    return (
      <div className={`${name}-wrap`}>

      </div>
    )
  }
}
