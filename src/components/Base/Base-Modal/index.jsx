import React from 'react';
import { Modal } from 'antd';

const BaseModal = (props) => {
  return (
    <>
      <Modal
        title="Title"
        open={props.open}
        onOk={props.handleOk}
        confirmLoading={props.confirmLoading}
        onCancel={props.handleCancel}
        bodyStyle={{ minHeight: 500 }}
        width={900}
        centered
      >
        {props.children}
      </Modal>
    </>
  )
}

export default BaseModal;