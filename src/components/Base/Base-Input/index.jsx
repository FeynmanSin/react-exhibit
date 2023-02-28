import React, { useRef, forwardRef, useImperativeHandle } from "react";

import { Input } from 'antd';


const BaseInput = (props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => (
    {
      getInputVal,
      clearInputVal
    }
  ))
  const getInputVal = () => {
    return inputRef.current.input.value;
  }
  const clearInputVal = () => {
    inputRef.current.input.value = '';
  }
  return (
    <div style={{ width: props.width }}>
      <Input
        ref={inputRef}
        placeholder={props.placeholder ? props.placeholder : '请输入'}
        onChange={props?.onChange}
        value={props?.value}
      />
    </div>

  )
};


export default forwardRef(BaseInput);