import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { typeOf} from "../../assets/js/util";
import FormItem from './form-item'

export default class Form extends Component{
  static propTypes = {
    data: PropTypes.oneOfType(PropTypes.object,PropTypes.array)
  };
  state = {

  };
  data_type(obj){
    return typeOf(obj)
  };
  render(){
    return(
      <div>
        {
          this.data_type(this.props.data) === 'object' && <div className='form-item-wrap'>
            <FormItem data={this.props.data}></FormItem>
          </div>
        }
        {
          this.data_type(this.props.data) === 'array' && <div className='form-item-wrap'>
            {
              this.props.data.map((item, index)=>{
                return <div className={`form-item-wrap-col-${index+1}`} key={index}>
                  <FormItem data={item}></FormItem>
                </div>
              })
            }
          </div>
        }
      </div>
    )
  }
}
