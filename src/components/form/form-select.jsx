import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Select} from 'antd';

const Option = Select.Option;

export default class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || undefined,
      options: this.props.data.options || [],
      disabled: this.props.data.disabled || false,
      defaultValue: this.props.value || '',
      placeholder: this.props.data.placeholder || '',
      // 设置 Select 的模式为多选或标签 'multiple' | 'tags'
      mode: (this.props.data.expand && this.props.data.expand.mode) || '',
      // 支持清除
      allowClear: (this.props.data.expand && this.props.data.expand.allowClear) || false,
      // 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。
      filterOption: (this.props.data.expand && this.props.data.expand.filterOption) || false,
    };
    this.valueChange = this.valueChange.bind(this);
  }

  static propTypes = {
    value: PropTypes.string,
    data: PropTypes.object
  };

  state = {

  };

  valueChange(value, option) {
    console.log(value, option)
    // this.setState({
    //   value: e.target.value
    // });
    // this.props.valueChange(e.target.value);
  };

  render() {
    const name = 'form-select';
    return (
      <div className={`${name}-wrap`}>
        <Select
          className={`${name}-select`}
          value={this.state.value}
          defaultValue={this.state.defaultValue}
          disabled={this.state.disabled}
          mode={this.state.mode}
          allowClear={this.state.allowClear}
          filterOption={this.state.filterOption}
          placeholder={this.state.placeholder}
          onChange={this.valueChange}>
          {
            this.state.options.map((item, index)=>{
              return <Option key={index} value={item.id}>{item.name}</Option>
            })
          }
        </Select>
      </div>
    )
  }
}
