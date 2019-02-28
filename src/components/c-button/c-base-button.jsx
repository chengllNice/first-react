import React, {Component} from 'react';
import { Button} from 'antd'
import CButton from './c-button'
import PropTypes from 'prop-types'
import './c-base-button.less'

export default class CBaseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    type: PropTypes.string,
    block: PropTypes.bool
  };
  render() {
    const name = 'c-base-button';
    return (
      <div className={`${name}-wrap`}>
        <CButton>
          <Button type={this.props.type} block={this.props.block}>
            {this.props.children}
          </Button>
        </CButton>
      </div>
    )
  }
}
