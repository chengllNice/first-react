import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Input } from 'antd';

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      defaultValue: this.props.data.defaultValue || '',
      disabled: this.props.data.disabled || false,
      placeholder: this.props.data.placeholder || '',
      prefix: (this.props.data.expand && this.props.data.expand.prefix) || '',
      suffix: (this.props.data.expand && this.props.data.expand.suffix) || '',
      allowClear: (this.props.data.expand && this.props.data.expand.allowClear) || false,
      inputType: (this.props.data.expand && this.props.data.expand.inputType) || '',
    // { minRows: 2, maxRows: 6 }
      autosize: (this.props.data.expand && this.props.data.expand.autosize) || false,
      // 针对password
      visibilityToggle: (this.props.data.expand && this.props.data.expand.visibilityToggle) || false,
    };
    this.valueChange = this.valueChange.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
    this.valueSearch = this.valueSearch.bind(this);
  }

  static propTypes = {
    value: PropTypes.string,
    data: PropTypes.object
  };

  valueChange(e) {
    this.setState({
      value: e.target.value
    });
    this.props.valueChange(e.target.value);
  };
  valueSearch(){

  };
  pressEnter(){

  };
  render() {
    const name = 'form-input';
    return (
      <div className={`${name}-wrap`}>
        {
          (!this.state.inputType || this.state.inputType === '') && <Input
            defaultValue={this.state.defaultValue}
            placeholder={this.state.placeholder}
            onChange={this.valueChange}
            onPressEnter={this.pressEnter}/>
        }
        {
          this.state.inputType === 'password' && <Input.Password
            defaultValue={this.state.defaultValue}
            placeholder={this.state.placeholder}
            visibilityToggle={this.state.visibilityToggle}
            onChange={this.valueChange}
            onPressEnter={this.pressEnter}/>
        }
        {
          this.state.inputType === 'textarea' && <Input.TextArea
            autosize={this.state.autosize}
            defaultValue={this.state.defaultValue}
            placeholder={this.state.placeholder}
            onChange={this.valueChange}
            onPressEnter={this.pressEnter}/>
        }
        {
          this.state.inputType === 'search' && <Input.Search
            defaultValue={this.state.defaultValue}
            placeholder={this.state.placeholder}
            onChange={this.valueChange}
            onSearch={this.valueSearch}
            onPressEnter={this.pressEnter}/>
        }
      </div>
    )
  }
}
//<input type="text" value={this.state.value} onChange={this.vChange} ref={this.saveInputEl}/>

