import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { typeOf} from "../../assets/js/util";
import FormItem from './form-item'

export default class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      layout: this.props.layout
    }
  }

  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    layout: PropTypes.string
  };
  state = {

  };
  data_type(obj){
    return typeOf(obj)
  };
  render(){
    const name = 'form';
    return(
      <div className={`${name}-wrap`}>
        {
          this.data_type(this.props.data) === 'object' && <div className={`${name}-content`}>
            <FormItem data={this.props.data} layout={this.state.layout}></FormItem>
          </div>
        }
        {
          this.data_type(this.props.data) === 'array' && <div className={`${name}-content`}>
            {
              this.props.data.map((item, index)=>{
                return <div className={`form-item-wrap-col-${index+1}`} key={index}>
                  <FormItem data={item} layout={this.state.layout}></FormItem>
                </div>
              })
            }
          </div>
        }
      </div>
    )
  }
}
