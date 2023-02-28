import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Form, Input } from 'antd';

const BaseForm = forwardRef((props, ref) => {
  const formRef = useRef();
  useImperativeHandle(ref, () => (
    {
      submitData
    }
  ))

  const submitData = async () => {
    await formRef.current.validateFields();
    let formData = formRef.current.getFieldsValue(true)
    console.log('submit', formData)
    return formData;
  }

  return (
    <Form
      ref={formRef}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={submitData}
      onFinishFailed={props.onFinishFailed}
      autoComplete="off"
    >
      {
        props.formConfig && props.formConfig.map(item => {
          return (
            <Form.Item
              key={item.name}
              label={item.label}
              name={item.name}
              rules={item.rules}
              style={item.style}
            >
              <Input placeholder={item.placeholder} />
            </Form.Item>
          )
        })
      }
    </Form>
  )
})

export default BaseForm;