import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { leftNavData} from './left-nav.js'
import './left-nav.less'

export default class LeftNav extends Component {
  state = {
    leftNavData: []
  };
  componentWillMount(){
    this.setState({
      leftNavData: leftNavData
    });
  };
  componentDidMount(){
    console.log(this.state.leftNavData)
  };
  render(){
    return(
      <aside className='left-nav-aside'>
        {
          this.state.leftNavData.map((item, index)=>{
            return <NavLink to={item.path} key={index} exact className={`nav-link ${item.icon}`}>{item.name}</NavLink>
          })
        }
      </aside>
    )
  }
}


