import React from "react";
import { Button, Form, Input } from 'antd';


const BaseSearch = (props) => {
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        style={{
          display: 'flex', alignItems: 'center', ...props?.style
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={props.onSearch}
        autoComplete="off"
      >
        {
          props.searchData.length > 0 && (
            <>
              {
                props.searchData.map(item => {
                  return (
                    <Form.Item
                      key={item.key}
                      label={item?.label}
                      name={item.key}
                      style={{ marginLeft: 10, marginBottom: 0 }}
                    >
                      <Input placeholder={item.placeholder ? item.placeholder : '请输入'} />
                    </Form.Item>
                  )
                })
              }
              <Form.Item
                style={{ marginLeft: 10, marginBottom: 0 }}
              >
                <Button type="primary" htmlType="submit">
                  搜索
                </Button>
              </Form.Item></>
          )

        }

      </Form>
    </>
  )
}

export default BaseSearch;