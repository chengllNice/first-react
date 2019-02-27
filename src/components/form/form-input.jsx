import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.vChange = this.vChange.bind(this);
    this.saveInputEl = this.saveInputEl.bind(this);
  }
  static propTypes = {
    value: PropTypes.string
  };
  state = {
    inputEl: null
  };
  vChange(e){
    console.log(this.state.inputEl, this.state.inputEl.value)
    this.setState({
      value: this.state.inputEl.value
    });
    this.props.valueChange(this.state.value);
  };
  saveInputEl(node){
    console.log(node,'node------')
    this.setState({
      inputEl: node
    });
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.vChange} ref={this.saveInputEl}/>
      </div>
    )
  }
}
