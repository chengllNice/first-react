import React, {Component} from 'react';

export default class CButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {

  };
  render() {
    const name = 'c-button';
    return (
      <div className={`${name}-wrap`}>
        {this.props.children}
      </div>
    )
  }
}
