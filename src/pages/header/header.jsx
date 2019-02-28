import React, { Component} from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './header.less'

export default class PublicHeader extends Component{
  // static propTypes = {
  //
  // };
  state = {
    leftHeaderText: '博客后台管理'
  };
  render(){
    return(
      <header className='header-container'>
        {/*<div className="header-text">{this.state.leftHeaderText}</div>*/}
        <NavLink className='header-text' to='/homePage'>{this.state.leftHeaderText}</NavLink>
      </header>
    )
  }
}
