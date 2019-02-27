import React, { Component} from 'react';
import PropTypes from 'prop-types'
import Form from './form'

export default class CBasepageNew extends Component{
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  state = {

  };
  render(){
    return(
      <div>
        {
          this.props.data.map((item, index)=>{
            return <div className='' key={index}>
              {
                item.title && <div className='basepage-new-title'>
                  {item.title}
                </div>
              }
              <div className='basepage-new-content'>
                {
                  item.data.map((form_item, form_index)=>{
                    return <div className='basepage-new-content-form' key={form_index}>
                      <Form data={form_item}></Form>
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
