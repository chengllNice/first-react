import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd';

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

  state = {

  };

  deal_disabled(){
    let disabled = false;
    if(this.props.params && this.props.params.type === 'edit'){
      disabled = this.props.data.edit_disabled || false;
    }else{
      disabled = this.props.data.disabled || false;
    }
    this.setState({
      disabled: disabled
    });
  }

  valueChange(e) {
    this.setState({
      value: e.target.value
    });
    let obj = {
      type: 'input',
      value: e.target.value
    };
    if(this.props.valueChange){
      this.props.valueChange(obj)
    }
  };
  valueSearch(){

  };
  pressEnter(){

  };
  componentWillMount(){
    this.deal_disabled();
  }
  render() {
    const name = 'form-input';
    const prefix = this.state.prefix ? <Icon type={this.state.prefix}/> : null;
    const suffix = this.state.suffix ? <Icon type={this.state.suffix}/> : null;
    return (
      <div className={`${name}-wrap`}>
        {
          (!this.state.inputType || this.state.inputType === '') && <Input
            disabled={this.state.disabled}
            defaultValue={this.state.defaultValue}
            placeholder={this.state.placeholder}
            prefix={prefix}
            suffix={suffix}
            onChange={this.valueChange}
            onPressEnter={this.pressEnter}/>
        }
        {
          this.state.inputType === 'password' && <Input.Password
            disabled={this.state.disabled}
            defaultValue={this.state.defaultValue}
            placeholder={this.state.placeholder}
            prefix={prefix}
            suffix={suffix}
            visibilityToggle={this.state.visibilityToggle}
            onChange={this.valueChange}
            onPressEnter={this.pressEnter}/>
        }
        {
          this.state.inputType === 'textarea' && <Input.TextArea
            disabled={this.state.disabled}
            autosize={this.state.autosize}
            defaultValue={this.state.defaultValue}
            prefix={prefix}
            suffix={suffix}
            placeholder={this.state.placeholder}
            onChange={this.valueChange}
            onPressEnter={this.pressEnter}/>
        }
        {
          this.state.inputType === 'search' && <Input.Search
            disabled={this.state.disabled}
            defaultValue={this.state.defaultValue}
            placeholder={this.state.placeholder}
            prefix={prefix}
            suffix={suffix}
            onChange={this.valueChange}
            onSearch={this.valueSearch}
            onPressEnter={this.pressEnter}/>
        }
      </div>
    )
  }
}
//<input type="text" value={this.state.value} onChange={this.vChange} ref={this.saveInputEl}/>

