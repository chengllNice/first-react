import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Card, Icon } from 'antd';
import './c-card.less'

export default class CCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    title: PropTypes.string,
    titlePosition: PropTypes.string,
    titleIcon: PropTypes.string,
    iconPosition: PropTypes.string,
    bordered: PropTypes.bool
  };
  static defaultProps = {
    bordered: false
  };
  render() {
    const name = 'c-card';
    return (
      <div className={`${name}-wrap`}>
        <Card bordered={this.props.bordered}>
          <div className={`${name}-card`}>
            {
              this.props.title && <div className={`${name}-title`}>
                <div className={`${name}-title-left`}>
                  {
                    this.props.titleIcon && <div className={`${name}-title-icon`}>
                      <Icon type={this.props.titleIcon} />
                    </div>
                  }
                  <div className={`${name}-title-text`}>
                    {this.props.title}
                  </div>
                </div>
                <div className={`${name}-title-right`}>

                </div>
              </div>
            }
            <div className={`${name}-content`}>
              {this.props.children}
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
