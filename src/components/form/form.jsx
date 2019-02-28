import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { typeOf} from "../../assets/js/util";
import FormItem from './form-item'

export default class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
    this.valueChange = this.valueChange.bind(this);
  }

  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
    layout: PropTypes.string,
    labelWidth: PropTypes.string
  };
  state = {

  };
  data_type(obj){
    return typeOf(obj)
  };
  deal_props_children(form_item){
    if(form_item && form_item.slot){
      if(this.props.children && typeOf(this.props.children) === 'object'){
        return this.props.children;
      }else if(this.props.children && typeOf(this.props.children) === 'array'){
        return this.props.children.filter((item, index)=>{
          return form_item.slot === item.props.name
        })
      }
    }
  };
  // 处理该项是否展示
  deal_show(form_item){
    if(this.props.params && this.props.params.type === 'edit'){
      return form_item.edit_show
    }else{
      return form_item.show
    }
  }
  valueChange(obj){
    if(this.props.valueChange){
      this.props.valueChange(obj)
    }
  };
  componentDidMount(){
    console.log(this,'this.props.params.type')
  }
  render(){
    const name = 'form';
    return(
      <div className={`${name}-wrap`}>
        {
          this.data_type(this.props.data) === 'object' && this.deal_show(this.props.data) && <div className={`${name}-content`}>
            <FormItem
              data={this.props.data}
              layout={this.props.layout}
              labelWidth={this.props.labelWidth}
              valueChange={this.valueChange}>
              {this.props.children}
            </FormItem>
            <div className={`${name}-form-error`}></div>
          </div>
        }
        {
          this.data_type(this.props.data) === 'array' && <div className={`${name}-content`}>
            {
              this.props.data.map((item, index)=>{
                if(this.deal_show(item) ){
                  return <div className={`form-item-wrap-col form-item-wrap-col-${index+1}`} key={index}>
                    {
                      item.show && <div>
                        <FormItem
                          data={item}
                          layout={this.props.layout}
                          labelWidth={this.props.labelWidth}
                          valueChange={this.valueChange}>
                          {this.deal_props_children(item)}
                        </FormItem>
                        <div className={`${name}-form-error`}></div>
                      </div>
                    }
                  </div>
                }
              })
            }
          </div>
        }
      </div>
    )
  }
}
