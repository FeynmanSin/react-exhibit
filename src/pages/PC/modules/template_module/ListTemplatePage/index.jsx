import React, { useEffect } from "react";
import ListContainer from '../../../../../components/Container/ListContainer'
import { useAsync } from '../../../../../hooks/index';
import * as request from '../../../../../utils/request';
// 搜索栏配置
const searchData = [
  {
    key: 'name',
    placeholder: '请输入名字'
  },
  {
    key: 'age',
    placeholder: '请输入年龄'

  },
  {
    key: 'address',
    placeholder: '请输入地址'
  },
];

// 表格配置
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

// 弹窗表单配置
const modalFormConfig = [
  {
    label: '姓名',
    name: 'name',
    rules: [
      {
        required: true,
        message: 'Please input your name!',
      },
    ]
  },
  {
    label: '年龄',
    name: 'age',
    rules: [
      {
        required: true,
        message: 'Please input your age!',
      },
    ]
  },
  {
    label: '住址',
    name: 'address',
    rules: [
      {
        required: true,
        message: 'Please input your address!',
      },
    ]
  },
]

const UserMangePage = () => {

  return (
    <>
      <ListContainer
        searchData={searchData}
        columns={columns}
        modalFormConfig={modalFormConfig}
      />
    </>

  )
};

export default UserMangePage;