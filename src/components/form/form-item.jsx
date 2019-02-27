import React, { Component} from 'react';
import PropTypes from 'prop-types'
import FormInput from "./form-input";


export default class FormItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formData: this.props.data
    };
    this.valueChange = this.valueChange.bind(this);
  }
  static propTypes = {
    data: PropTypes.object
  };
  valueChange(value){
    let formData = this.state.formData;
    formData.value = value;
    this.setState({
      formData: formData
    })
  };
  render(){
    return(
      <div>
        <div className='form-item-label'>
          {this.state.formData.name}:
        </div>
        <div className='form-item-input'>
          {
            (!this.state.formData.type || this.state.formData.type === 'input') && <FormInput value={this.state.formData.value} valueChange={this.valueChange}></FormInput>
          }
        </div>
      </div>
    )
  }
}
