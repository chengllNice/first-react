import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import LeftNav from '../leftNav/left-nav.jsx'
import './header.less'

export default class PublicHeader extends Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
    record: PropTypes.any,
    confirm: PropTypes.any,
  };
  state = {
    navToggle: false
  };
  toggleNav = (e,nav_state) => {
    let new_state = false;
    if(typeof nav_state === 'boolean'){
      new_state = nav_state;
    }else{
      new_state = !this.state.navToggle;
    }
    this.setState({
      navToggle: new_state
    });
  };
  // css动画组件设置为目标组件
  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  };
  render(){
    return(
      <header className='header-container'>
        <span className="header-slide-icon icon-catalog" onClick={this.toggleNav}></span>
        <span className="header-title">{this.props.title}</span>
        {
          this.props.record&&<NavLink to="/record" exact className="header-link icon-jilu"></NavLink>
        }
        {
          this.props.confirm&&<NavLink to="/" exact className="header-link header-link-confim">确定</NavLink>
        }
        <ReactCSSTransitionGroup
          component={this.FirstChild}
          transitionName='nav'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {
            this.state.navToggle && <div key='nav-slide' className="nav-slide-list" onClick={()=>this.toggleNav(false)}>
              <div className='nav-slide-list-wrap'>
                <LeftNav></LeftNav>
              </div>
            </div>
          }
        </ReactCSSTransitionGroup>
      </header>
    )
  }
}
