import React from "react";
import { Table } from 'antd';

import './index.css';

const BaseTable = (props) => {
  return (
    <div >
      <Table
        columns={props.columns}
        dataSource={props.dataSource}
        scroll={{
          y: 650,
        }}
        pagination={false}
      />
    </div>
  )
};

export default BaseTable;
