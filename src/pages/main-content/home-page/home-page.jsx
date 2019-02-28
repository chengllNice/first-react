import React, {Component} from 'react';
import { Template} from '../../../components/template/template'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  render() {
    const name = 'home-page';
    return (
      <Template>
        <div className={`${name}-wrap`}>
          <h1>home</h1>
        </div>
      </Template>
    )
  }
}
