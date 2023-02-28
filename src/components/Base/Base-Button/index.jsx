import React from 'react';
import { Button } from 'antd';

const BaseButton = (props) => {

  return (
    <div style={{ display: 'flex', alignItems: 'center', ...props?.style }}>
      <Button
        type="primary"
        onClick={props.onClick}
        style={props.style}
      >
        {props.text}
      </Button>
    </div >
  )
};

export default BaseButton;