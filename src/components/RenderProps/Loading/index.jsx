import React from 'react'
import { Spin } from 'antd';


const Loading = (props) => {
  return (
    props.loading
      ? <Spin
        tip={props.tip ? props.tip : 'Loading'}
        size={props.size ? props.size : 'small'}
        style={{ position: 'absolute', top: '50%', left: '50%' }}
      />
      : (
        <>
          {
            props.children
          }
        </>
      )
  )
}

export default Loading