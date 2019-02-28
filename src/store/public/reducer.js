import * as Public from "../public/action-type";

let defaultState = {
  leftNavFlag: true,//左侧导航状态
};

export const PublicData = (state = defaultState, action = {}) => {
  switch(action.type){
    case Public.TOGGLELEFTNAVFLAG:
      return {...state, ...{leftNavFlag: action.value}};
    default:
      return state;
  }
};
