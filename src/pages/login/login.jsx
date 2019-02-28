import React, {Component} from 'react';
import CBasepageNew from '../../components/form/c-basepage-new'
import CBaseButton from '../../components/c-button/c-base-button'
import { login_form} from "./login_data";
import CCard from '../../components/c-card/c-card'
import './login.less'

export default class Login extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  state = {
    login_form: [],
    loginTitle: '欢迎登录',
    loginTitleIcon: 'login',
  };

  componentWillMount(){
    this.setState({
      login_form: login_form
    });
  };

  render() {
    const name = 'login';
    const login_button = <div className='login-btn'><CBaseButton type='primary' block={true}>登录</CBaseButton></div>;
    return (
      <div className={`${name}-wrap`}>
        <div className={`${name}-form_wrap`}>
          <CCard bordered={false} title={this.state.loginTitle} titleIcon={this.state.loginTitleIcon}>
            <div className={`${name}-card`}>
              <CBasepageNew data={this.state.login_form} slotFooter={login_button}>

              </CBasepageNew>
            </div>
          </CCard>
        </div>
      </div>
    )
  }
}

