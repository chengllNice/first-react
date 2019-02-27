import React, {Component} from 'react'
import {connect} from 'react-redux'
import PublicHeader from '../../components/header/header'
import CBasepageNew from '../../components/form/c-basepage-new'
import { form_data} from './home_data'


class Home extends Component {
  static propTypes = {};

  state = {
    form_data: []
  };
  componentWillMount(){
    this.setState({
      form_data: form_data
    });
  };

  render() {
    return (
      <main>
        <PublicHeader title='首页' record></PublicHeader>
        <CBasepageNew data={this.state.form_data}></CBasepageNew>
        <h1> 111 </h1>
      </main>
    )
  }
}

export default Home
// export default connect(state=>{
//
// })(Home)
