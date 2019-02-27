import React, { Component} from 'react';
import PropTypes from 'prop-types'
import Form from './form'
import './c-basepage-new.less'

export default class CBasepageNew extends Component{
  constructor(props) {
    super(props);
    this.state = {
      layout: this.props.data.layout || 'horizontal'
    }
  }

  static propTypes = {
    data: PropTypes.array.isRequired
  };
  state = {

  };
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
                      <Form data={form_item} layout={this.state.layout}></Form>
                    </div>
                  })
                }
              </div>
            </div>
          })
        }
      </div>
    )
  }
}
