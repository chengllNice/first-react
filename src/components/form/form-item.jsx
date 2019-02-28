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
    layout: PropTypes.string,
    labelWidth: PropTypes.string
  };

  static defaultProps = {
    layout: 'horizontal',
    data: {},
    labelWidth: '120px'
  };

  valueChange(obj) {
    let formData = this.state.formData;
    formData.value = obj.value;
    this.setState({
      formData: formData
    });
    obj.data = formData;
    if(this.props.valueChange){
      this.props.valueChange(obj)
    }
  };

  componentWillMount(){

  }

  render() {
    const name = 'form-item';
    return (
      <div className={`${name}-wrap ${name}-${this.state.layout}`}>
        {
          this.state.formData.name && <div className={`${name}-label`} style={{width: this.props.labelWidth}}>
            {this.state.formData.name}:
          </div>
        }
        {
          this.props.children ? <div className={`${name}-input`}>
            {this.props.children}
          </div> : <div className={`${name}-input`}>
            {
              (!this.state.formData.type || this.state.formData.type === 'input') &&
              <FormInput  data={this.state.formData} value={this.state.formData.value} valueChange={this.valueChange}/>
            }
            {
              (!this.state.formData.type || this.state.formData.type === 'select') &&
              <FormSelect data={this.state.formData} value={this.state.formData.value} valueChange={this.valueChange}/>
            }
          </div>
        }
      </div>
    )
  }
}
