import React from 'react';
import LeftNav from '../../pages/left-nav/left-nav'
import Header from '../../pages/header/header'
import './template.less'

export const Template = (props)=> (
  <div className='template-wrap'>
    <Header></Header>
    <div className='template-wrap-content'>
      <div className='template-left-wrap'>
        <LeftNav></LeftNav>
      </div>
      <div className='template-mian-content-wrap'>
        {props.children}
      </div>
    </div>
  </div>
);
