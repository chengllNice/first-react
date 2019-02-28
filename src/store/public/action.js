import * as Public from './action-type'

// 修改left-nav状态
export const toggelLeftNavFlag = (value)=>{
  return {
    type: Public.TOGGLELEFTNAVFLAG,
    value
  }
};
