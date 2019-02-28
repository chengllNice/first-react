import React, { Component} from 'react';
import PropTypes from 'prop-types'
import Form from './form'
import CBaseButton from '../c-button/c-base-button'
import { typeOf, setObjectValue} from "../../assets/js/util";
import './c-basepage-new.less'

export default class CBasepageNew extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
    this.valueChange = this.valueChange.bind(this);
    this.deal_props_children = this.deal_props_children.bind(this);
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
    slotFooter: PropTypes.element,
    labelWidth: PropTypes.string,
    layout: PropTypes.string
  };
  state = {
    slotArr: [],//slot数组
  };
  // 处理props_children
  deal_props_children(form_item_data){
    let deal_obj_data = (form_item)=>{
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
    if(typeOf(form_item_data) === 'array'){
      let arr = [];
      form_item_data.forEach(item=>{
        if(item && item.slot){
          arr.push(deal_obj_data(item));
        }
      });
      if(arr.length){
        return arr;
      }
    }else if(typeOf(form_item_data) === 'object'){
      return deal_obj_data(form_item_data);
    }
  };
  valueChange(obj){
    if(this.props.valueChange){
      this.props.valueChange(obj)
    }
  };
  // 提交数据处理
  submitClick(){
    let result = {};
    let data_len = this.props.data.length;
    for(let i = 0; i < data_len; i++){
      let data = this.props.data[i].data;
      for(let j = 0; j < data.length; j++){
        if(typeOf(data[j]) === 'object'){
          let value = data[j].value;
          if(typeOf(value) === 'string'){
            value = value.toString().trim();
          }
          setObjectValue(result, data[j].jpath, value);
        }else if(typeOf(data[j]) === 'array'){

        }
      }
    }
  }
  // 取消
  cancelClick(){

  }
  componentWillMount(){

  };
  componentDidMount(){

  }
  render(){
    const name = 'c-basepage-new';
    return(
      <div className={`${name}-wrap`}>
        {
          this.props.data.map((item, index)=>{
            return <div className={`${name}-box`} key={index}>
              {
                item.title && <div className={`${name}-title`}>
                  {item.title}
                </div>
              }
              <div className={`${name}-content`}>
                {
                  item.data.map((form_item, form_index)=>{
                    return <div className={`${name}-content-form`} key={form_index}>
                      <Form
                        data={form_item}
                        layout={this.props.layout}
                        valueChange={this.valueChange}
                        labelWidth={this.props.labelWidth}>
                        {this.deal_props_children(form_item)}
                      </Form>
                    </div>
                  })
                }
              </div>
            </div>
          })
        }
        <div className={`${name}-btn-group`}>
          {
            this.props.slotFooter ? this.props.slotFooter : <div className={`${name}-btn-group-default`}>
              <div className={`${name}-sure-btn`}>
                <CBaseButton type='primary' onClick={this.submitClick}>确认</CBaseButton>
              </div>
              <div className={`${name}-cancel-btn`}>
                <CBaseButton onClick={this.cancelClick}>取消</CBaseButton>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
