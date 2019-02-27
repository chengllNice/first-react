import React, {Component} from 'react';
import PropTypes from 'prop-types'
import FormInput from "./form-input";
import FormSelect from "./form-select";


export default class FormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.props.data,
      layout: this.props.layout
    };
    this.valueChange = this.valueChange.bind(this);
  }

  static propTypes = {
    data: PropTypes.object,
    layout: PropTypes.string
  };

  valueChange(value) {
    let formData = this.state.formData;
    formData.value = value;
    this.setState({
      formData: formData
    })
  };

  render() {
    const name = 'form-item';
    return (
      <div className={`${name}-wrap ${name}-${this.state.layout}`}>
        <div className={`${name}-label`}>
          {this.state.formData.name}:
        </div>
        <div className={`${name}-input`}>
          {
            (!this.state.formData.type || this.state.formData.type === 'input') &&
            <FormInput data={this.state.formData} value={this.state.formData.value} valueChange={this.valueChange}></FormInput>
          }
          {
            (!this.state.formData.type || this.state.formData.type === 'select') &&
            <FormSelect data={this.state.formData} value={this.state.formData.value} valueChange={this.valueChange}></FormSelect>
          }
        </div>
      </div>
    )
  }
}
