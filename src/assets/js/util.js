export const typeOf = (obj) => {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
};
/**
 * 返回一个对象，给对象增加属性与值
 * @param {传入的对象} obj
 * @param {传入的jpath} text
 * @param {设置的值} value
 */
export const setObjectValue = (obj, text, value) => {
  try {
    if(text == ''){
      return obj
    }
    let textArr = text.split('.');
    let set_value = (temp_obj, textArr) => {
      let key = textArr.shift();
      if(!temp_obj[key]){
        temp_obj[key] = {};
      }
      if(!textArr.length){
        temp_obj[key] = value;
        return obj;
      }
      return set_value(obj, textArr);
    };
    return set_value(obj, textArr);
  }catch (e) {
    console.log(e);
  }
};
