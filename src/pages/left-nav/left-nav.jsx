import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon} from 'antd'
import PropTypes from 'prop-types'
import { toggelLeftNavFlag } from '../../store/public/action';
import { leftNavData} from './left-nav-data.js'
import './left-nav.less'

class LeftNav extends Component {
  constructor(props){
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
  }
  static propTypes = {
    PublicData: PropTypes.object.isRequired,
    toggelLeftNavFlag: PropTypes.func.isRequired,
  };
  state = {
    leftNavData: [],
    bottomText: '导航',
    letNavFlag: true,
  };
  toggleNav(){
    this.props.toggelLeftNavFlag(this.state.letNavFlag);
    this.setState({
      letNavFlag: !this.state.letNavFlag
    });
  }
  componentWillMount(){
    this.setState({
      leftNavData: leftNavData,
      letNavFlag: !this.props.PublicData.leftNavFlag
    });
  };
  componentDidMount(){
    console.log(this.props.PublicData,'--------PublicData')
  };
  render(){
    const name = 'left-nav';
    return(
      <aside className={`${name}-aside ${!this.props.PublicData.leftNavFlag ? 'left-nav-aside-close' : ''}`}>
        <div className={`${name}-aside-list`}>
          {
            this.state.leftNavData.map((item, index)=>{
              return <NavLink to={item.path} key={index} exact className={`nav-link`}>
                <Icon className='nav-link-icon' type={item.icon}/>
                  {
                    this.props.PublicData.leftNavFlag && <span className='nav-link-name'>{item.name}</span>
                  }
              </NavLink>
            })
          }
        </div>
        <div className={`${name}-aside-bottom`}>
          {
            this.props.PublicData.leftNavFlag && <div className='bottom-text'>
              {this.state.bottomText}
            </div>
          }
          <Icon className='bottom-icon' type="menu-fold" onClick={this.toggleNav}/>
        </div>
      </aside>
    )
  }
}

export default connect(state => ({
  PublicData: state.PublicData,
}), {
  toggelLeftNavFlag
})(LeftNav);

/*<ReactCSSTransitionGroup
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
</ReactCSSTransitionGroup>*/


